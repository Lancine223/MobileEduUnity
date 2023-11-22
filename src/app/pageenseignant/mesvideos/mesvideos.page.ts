import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertController } from '@ionic/angular';
import { Enseignant } from 'src/app/model/enseignant';
import { Videos } from 'src/app/model/videos';
import { AuthService } from 'src/app/service/auth.service';
import { VideosService } from 'src/app/service/videos.service';
import { AjoutervideoComponent } from '../ajoutervideo/ajoutervideo.component';

@Component({
  selector: 'app-mesvideos',
  templateUrl: './mesvideos.page.html',
  styleUrls: ['./mesvideos.page.scss'],
})
export class MesvideosPage implements OnInit {
  listVideos: Videos[]|any;

  enseignant: Enseignant|any;
  constructor(  private _dialog: MatDialog,
    private videosService: VideosService,
    private authService: AuthService,
    private alertController: AlertController) {
      this.enseignant = this.authService.getEnseignantConnect();
      this.getListeVideosByEnseignant();
     }

  ngOnInit() {

    this.videosService.update$.subscribe(() => {
      this.getListeVideosByEnseignant();
      this.enseignant = this.authService.getEnseignantConnect();
    });

  }

  async getListeVideosByEnseignant() {
    try {
      const niveauId = this.enseignant.idEnseignant;

      if (niveauId) {
        const listVideos = await this.videosService.getListeByEnseignant(niveauId).toPromise();

        this.listVideos = listVideos;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des videos', error);
    }
  }


  async presentAlert(cours: any) {
    const alert = await this.alertController.create({
      header: 'Voulez-vous supprimer cette video ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Suppression annulée');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.deleteVideos(cours);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteVideos(cours: any) {
    this.videosService.deleteVideos(cours).subscribe(
      (response) => {
        this.videosService.triggerUpdate();
        this.authService.triggerUpdate();
      },
      (error) => {
        console.error('Erreur lors de la suppression du video :', error);
        this.videosService.triggerUpdate();
      }
    );
    this.videosService.triggerUpdate();
  }



  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutervideoComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: Videos, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AjoutervideoComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
