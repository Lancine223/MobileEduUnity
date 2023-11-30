import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Enseignant } from 'src/app/model/enseignant';
import { Forum } from 'src/app/model/forum';
import { AuthService } from 'src/app/service/auth.service';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-addeditforum',
  templateUrl: './addeditforum.component.html',
  styleUrls: ['./addeditforum.component.scss'],
})
export class AddeditforumComponent  implements OnInit {

  forumForm: FormGroup;
  enseignant: Enseignant|undefined;
  alertController: any;
  dateMin: any;

  constructor(
    private _dialogRef: MatDialogRef<AddeditforumComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private forumService: ForumService,
    @Inject(MAT_DIALOG_DATA) public data: Forum | any
  ) {
    this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    this.forumForm = this.formBuilder.group({
      idForum: this.data ? this.data.Forum : '', // Si c'est une modification, initialisez avec l'ID existant
      titre: [this.data ? this.data.datetache : '', Validators.required],
      description: [this.data ? this.data.description : '', Validators.required],
      enseignant: this.enseignant, //


    });
  }
  ngOnInit(): void {
    this.forumForm.patchValue(this.data);
    this.authService.update$.subscribe(() => {
      this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    });
    this.dateMin = new Date;
  }

  onSubmit() {
    if (this.forumForm.valid) {
      const data = this.forumForm.value;
      if (this.data) {
        // Update
        this.forumService.modifierForum(data).subscribe(
          (response) => {
            this.forumForm.reset();
            this._dialogRef.close(true);
            this.forumService.triggerUpdate();
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



        this.forumService.ajouterForum(data).subscribe(
          (response) => {

            this.forumForm.reset();
            this._dialogRef.close(true);
            this.forumService.triggerUpdate();
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
        this.forumService.triggerUpdate();

      }

    }

  }


}
