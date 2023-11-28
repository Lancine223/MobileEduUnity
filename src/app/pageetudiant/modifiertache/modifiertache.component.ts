import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Etudiant } from 'src/app/model/etudiant';
import { TodoList } from 'src/app/model/todo-list';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-modifiertache',
  templateUrl: './modifiertache.component.html',
  styleUrls: ['./modifiertache.component.scss'],
})
export class ModifiertacheComponent  implements OnInit {

  tacheForm: FormGroup;
  dateAujourd: any;
  etudiant: Etudiant|undefined;
  alertController: any;

  constructor(
    private _dialogRef: MatDialogRef<ModifiertacheComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthetudiantService,
    private todoService: TodolistService,
    @Inject(MAT_DIALOG_DATA) public data: TodoList | any
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.tacheForm = this.formBuilder.group({
      idTodoList: this.data ? this.data.TodoList : '', // Si c'est une modification, initialisez avec l'ID existant
      datetache: [this.data ? this.data.datetache : '', Validators.required],
      complete: false,
      description: [this.data ? this.data.description : '', Validators.required],
      etudiant: this.etudiant, //

    });
  }
  ngOnInit(): void {
    this.dateAujourd = new Date;
    this.tacheForm.patchValue(this.data);
    this.authService.update$.subscribe(() => {
      this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });
  }

  onSubmit() {
    if (this.tacheForm.valid) {
      const data = this.tacheForm.value;
      if (this.data) {
        // Update
        this.todoService.modifierTache(data).subscribe(
          (response) => {
            this.tacheForm.reset();
            this._dialogRef.close(true);
            this.todoService.triggerUpdate();
          },
          async (error) => {
            const msg = error.error.message;
            const alert = await this.alertController.create({
              header: 'Erreur de validation',
              message: msg,
              buttons: ['OK']
            });
            await alert.present();
          }
        );


      } else {
        // Create



        this.todoService.ajouterTache(data).subscribe(
          (response) => {

            this.tacheForm.reset();
            this._dialogRef.close(true);
            this.todoService.triggerUpdate();
          },
          async (error) => {
            const msg = error.error.message;
            const alert = await this.alertController.create({
              header: 'Erreur de validation',
              message: msg,
              buttons: ['OK']
            });
            await alert.present();
          }
        );
        this.todoService.triggerUpdate();

      }

    }

  }


}
