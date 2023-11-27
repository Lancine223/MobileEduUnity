import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant';
// import { CoreService } from '../service/core.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from '../service/enseignant.service';
import { AuthService } from '../service/auth.service';
import { Classe } from '../model/classe';
import { Niveau } from '../model/niveau';
import { Filiere } from '../model/filiere';
import { FiliereService } from '../service/filiere.service';
import { NiveauService } from '../service/niveau.service';
import { ClasseService } from '../service/classe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionenseignant',
  templateUrl: './inscriptionenseignant.component.html',
  styleUrls: ['./inscriptionenseignant.component.scss'],
})
export class InscriptionenseignantComponent  implements OnInit {

  enseignantFrom!: FormGroup |any;
  diplomeSrc: string | any;
  enseignantRecup: Enseignant | undefined;
  dataEnseignant : any;
  diplome!: File;
  niveaux: Niveau[]|any;
  filieres: Filiere[]|any;
  classes: Classe[]|any;


  constructor(private formBuilder: FormBuilder,
    // private snack : CoreService,
    private route: Router,
    private enseignantService: EnseignantService,
     private authService: AuthService,
     private alertController: AlertController,
     private niveauService: NiveauService,
     private filieresService: FiliereService,
     private classesService: ClasseService
     ) {
      // this.niveaux[0]= this.niveau1;

    // this.enseignantRecup = this.authService.getEnseignantConnect();
    // console.log("Admin recup dans guide ", this.adminRecup);

    this.enseignantFrom = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      etablissement: ['', Validators.required],
      telephone: ['', Validators.required],
      // nombreAbonnes: 0,
      diplome: ['', Validators.required],
      // acces: false,
      apropos: null,
      email: ['', [Validators.required]],
      motDePasse: ['', Validators.required],
      niveau: ['', Validators.required],
      filiere: ['', Validators.required],
      classe: ['', Validators.required],
  });

  }

  ngOnInit(): void {
    this.loadNiveauList();
    this.loadFilieres();
    this.loadClasses();
    // this.loadFilieres(this.niveau1.idNiveau);
  }

  ImageChange(event: any) {
    this.diplome = event.target.files[0];
    console.log(this.diplome);
  }




        ////////////////////
        async onSubmitNew() {
          if (this.enseignantFrom.valid) {
            const data = this.enseignantFrom.value;

            try {
              const response = await this.enseignantService.createEnseignant(data, this.diplome).toPromise();

              console.log('Réponse de l\'API :', response);

              const alert = await this.alertController.create({
                header: 'Succès',
                message: response.response.text, // Vérifiez la structure de votre réponse
                buttons: ['OK']
              });
              await alert.present();
              // this.route.navigate(['../deuxieme']);

            } catch (error: any) { // Spécifiez le type de l'objet error
              const result = error.error.text;
              if(result === 'succes'){
                console.log('reussit');
                const alert = await this.alertController.create({
                  header: 'Succes',
                  message: error.error.text,
                  buttons: ['OK']
                });
                await alert.present();
                // Navigation après le succès
              this.route.navigate(['home/deuxieme']);
              }else{
                const alert = await this.alertController.create({
                  header: 'Erreur',
                  message: error.error.text,
                  buttons: ['OK']
                });
                await alert.present();
              }


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

loadNiveauList(): void {
          this.niveauService.getNiveauList().subscribe(
            (data) => {
              this.niveaux = data;
            },
            (error) => {
              console.error('Erreur lors du chargement de la liste des niveaux:', error);
            }
          );
}

async loadFilieres() {
  try {
    const niveauId = this.enseignantFrom.get('niveau')?.value;
    if (niveauId) {
      const filieres = await this.filieresService.getFilieresByNiveau(niveauId).toPromise();
      this.filieres = filieres;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des filières', error);

    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur s\'est produite lors du chargement des filières.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

async loadClasses() {
  try {
    const filiereId = this.enseignantFrom.get('filiere')?.value;
    if (filiereId) {
      const classes = await this.classesService.getClassesByFiliere(filiereId).toPromise();
      this.classes = classes;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des classes', error);

    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur s\'est produite lors du chargement des classes.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.diplomeSrc = reader.result as string;
        this.enseignantFrom.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

}
