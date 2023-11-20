import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { CoursService } from 'src/app/service/cours.service';

@Component({
  selector: 'app-ajoutercours',
  templateUrl: './ajoutercours.component.html',
  styleUrls: ['./ajoutercours.component.scss'],
})
export class AjoutercoursComponent  implements OnInit {

  coursForm!: FormGroup |any;
  documentSrc: string | any;
  enseignantRecup: Enseignant | undefined;
  document!: File;


  constructor(private formBuilder: FormBuilder,
    // private snack : CoreService,
    private route: Router,
    private coursService: CoursService,
     private authService: AuthService,
     private alertController: AlertController

     ) {
      // this.niveaux[0]= this.niveau1;

    this.enseignantRecup = this.authService.getEnseignantConnect();

    this.coursForm = this.formBuilder.group({
      idCours:'', // Si c'est une modification, initialisez avec l'ID existant
      titre: [ '', Validators.required],
      document: ['', Validators.required],
      enseignant: this.enseignantRecup
  });

  }

  ngOnInit(): void {

    this.authService.update$.subscribe(() => {
      this.enseignantRecup = this.authService.getEnseignantConnect();
    });
  }

  documentChange(event: any) {
    this.document = event.target.files[0];
    console.log(this.document);
  }


        ////////////////////
        async onSubmitNew() {
          if (this.coursForm.valid) {
            const data = this.coursForm.value;

            try {
               await this.coursService.createCours(data, this.document).toPromise();
               this.coursService.triggerUpdate();

            } catch (error: any) { // Spécifiez le type de l'objet error

                const alert = await this.alertController.create({
                  header: 'Erreur',
                  message: error.error.message,
                  buttons: ['OK']
                });
                await alert.present();
            }
          } else {
            // Données non valides
            const alert = await this.alertController.create({
              header: 'Erreur de validation',
              message: 'Veuillez remplir correctement tous les champs du formulaire.',
              buttons: ['OK']
            });
            await alert.present();
          }
        }


        ///////////////////

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.documentSrc = reader.result as string;
        this.coursForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }
}
