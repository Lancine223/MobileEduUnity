import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant';
import { TodoList } from 'src/app/model/todo-list';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { ModifiertacheComponent } from '../modifiertache/modifiertache.component';
import { TodolistService } from 'src/app/service/todolist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {




  tache: TodoList[]|any ;
  etudiant: Etudiant|any;

  constructor(
    private authService: AuthetudiantService,
    private todoService: TodolistService,
    private _dialog: MatDialog,
    private alertController: AlertController
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.chargerTache();
  }

  ngOnInit() {

    this.authService.update$.subscribe(() => {
          this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });

    this.todoService.update$.subscribe(() => {
      this.chargerTache();
    });
  }

  chargerTache(){
    const idEtudiant = this.etudiant.idEtudiant;
      this.todoService.listerTaches(idEtudiant).subscribe(tache => {
      this.tache = tache;

    });
  }



  async presentAlert(todol: any) {
    const alert = await this.alertController.create({
      header: 'Voulez-vous supprimer cette tache ?',
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
            this.deleteTodo(todol);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteTodo(todol: any) {
    this.todoService.supprimerTache(todol).subscribe(
      (response) => {
        // Le cours a été supprimé avec succès, vous pouvez mettre à jour la liste des cours si nécessaire

        this.todoService.triggerUpdate();
      },
      (error) => {
        console.error('Erreur lors de la suppression du todo :', error);

        this.todoService.triggerUpdate();
      }
    );

    this.todoService.triggerUpdate();
  }



  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(ModifiertacheComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: TodoList, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(ModifiertacheComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
