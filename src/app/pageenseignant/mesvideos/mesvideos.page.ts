import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private alertController: AlertController) {
      this.enseignant = this.authService.getEnseignantConnect();
      this.getListeVideosByEnseignant();
     }

  ngOnInit() {

    this.videosService.update$.subscribe(() => {
      this.getListeVideosByEnseignant();
      console.log("videos :", this.listVideos)
    });

  }

  async getListeVideosByEnseignant() {
    try {
      const niveauId = this.enseignant.idEnseignant;
      console.log('ID de l\'enseignant :', niveauId);

      if (niveauId) {
        const listVideos = await this.videosService.getListeByEnseignant(niveauId).toPromise();
        console.log('Videos récupérés du service :', listVideos);

        this.listVideos = listVideos;
        console.log('Mes videos après attribution :', this.listVideos);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des videos', error);
    }
  }


  openDocument(documentPath: string) {
    // Assumez que documentPath contient le chemin du document (peut être un PDF, Word, etc.)

    // Dans cet exemple, on suppose que le chemin est une URL vers le document.
    // Vous devrez adapter cela en fonction de la structure de vos documents.

    // Sécurisez l'URL du document pour éviter les problèmes de sécurité.
    const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(documentPath);

    // Ouvrez une nouvelle page ou une modale pour afficher le document.
    // Vous devrez créer une nouvelle page ou modale pour gérer cela.
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
        // Le cours a été supprimé avec succès, vous pouvez mettre à jour la liste des cours si nécessaire
        this.getListeVideosByEnseignant();
        this.videosService.triggerUpdate();
      },
      (error) => {
        console.error('Erreur lors de la suppression du video :', error);
        this.getListeVideosByEnseignant();
        this.videosService.triggerUpdate();
      }
    );
    this.getListeVideosByEnseignant();
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
