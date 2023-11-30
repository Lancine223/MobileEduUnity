import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Enseignant } from 'src/app/model/enseignant';
import { Forum } from 'src/app/model/forum';
import { AuthService } from 'src/app/service/auth.service';
import { ForumService } from 'src/app/service/forum.service';
import { AddeditforumComponent } from '../addeditforum/addeditforum.component';

@Component({
  selector: 'app-mesforum',
  templateUrl: './mesforum.page.html',
  styleUrls: ['./mesforum.page.scss'],
})
export class MesforumPage implements OnInit {


  listForum: Forum[]|any;

  enseignant: Enseignant|any;
  constructor(  private _dialog: MatDialog,
    private forumService: ForumService,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController) {
      this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
      this.getListeForumByEnseignant();
     }
    //  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit() {

    this.forumService.update$.subscribe(() => {
      this.getListeForumByEnseignant();
    });

    this.authService.update$.subscribe(() => {
      this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    });

  }

  async getListeForumByEnseignant() {
    try {
      const niveauId = this.enseignant.idEnseignant;

      if (niveauId) {
        const listForums = await this.forumService.getListeForums(niveauId).toPromise();

        this.listForum = listForums;
      }
    } catch (error) {
      console.error('Erreur lors du chargement des forum', error);
    }
  }



  async presentAlert(forum: any) {
    const alert = await this.alertController.create({
      header: 'Voulez-vous supprimer cet forum ?',
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
            this.deleteForum(forum);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteForum(forum: any) {
    this.forumService.supprimerForum(forum).subscribe(
      (response) => {
        // Le cours a été supprimé avec succès, vous pouvez mettre à jour la liste des cours si nécessaire
        this.forumService.triggerUpdate();
        this.getListeForumByEnseignant();
      },
      (error) => {
        console.error('Erreur lors de la suppression du cours :', error);
        this.forumService.triggerUpdate();
        this.getListeForumByEnseignant();
      }
    );
    this.forumService.triggerUpdate();
    this.getListeForumByEnseignant();
  }

  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AddeditforumComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: Forum, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AddeditforumComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

  

}
