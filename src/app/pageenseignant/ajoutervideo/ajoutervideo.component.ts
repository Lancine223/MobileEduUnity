import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertController } from '@ionic/angular';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { VideosService } from 'src/app/service/videos.service';

@Component({
  selector: 'app-ajoutervideo',
  templateUrl: './ajoutervideo.component.html',
  styleUrls: ['./ajoutervideo.component.scss'],
})
export class AjoutervideoComponent  implements OnInit {
  videosForm!: FormGroup |any;
  videosSrc: string | any;
  enseignantRecup: Enseignant | undefined;
  video!: File;


  constructor(private formBuilder: FormBuilder,
    // private snack : CoreService,
    private _dialogRef: MatDialogRef<AjoutervideoComponent>,
    private videosService: VideosService,
     private authService: AuthService,
     private alertController: AlertController

     ) {
      // this.niveaux[0]= this.niveau1;

    this.enseignantRecup = this.authService.getEnseignantConnect();

    this.videosForm = this.formBuilder.group({
      idVideos:'', // Si c'est une modification, initialisez avec l'ID existant
      titre: [ '', Validators.required],
      video: ['', Validators.required],
      enseignant: this.enseignantRecup
  });

  }

  ngOnInit(): void {

    this.authService.update$.subscribe(() => {
      this.enseignantRecup = this.authService.getEnseignantConnect();
    });
  }

  documentChange(event: any) {
    this.video = event.target.files[0];
    console.log(this.video);
  }


        ////////////////////
        async onSubmitNew() {
          if (this.videosForm.valid) {
            const data = this.videosForm.value;

            try {
               await this.videosService.createVideos(data, this.video).toPromise();
               this.videosService.triggerUpdate();
               this._dialogRef.close(true);

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
        this.videosSrc = reader.result as string;
        this.videosForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

}
