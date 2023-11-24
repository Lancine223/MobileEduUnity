import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-modifierprofileenseignant',
  templateUrl: './modifierprofileenseignant.component.html',
  styleUrls: ['./modifierprofileenseignant.component.scss'],
})
export class ModifierprofileenseignantComponent  implements OnInit {
  enseigantForm: FormGroup;
  alertController: any;

  constructor(
    private _dialogRef: MatDialogRef<ModifierprofileenseignantComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _dialog: MatDialog,
    private enseignantService: EnseignantService,
    @Inject(MAT_DIALOG_DATA) public data: Enseignant | any
  ) {
    this.enseigantForm = this.formBuilder.group({
    email: [this.data ? this.data.email : '', Validators.required],
    motDePasse: [this.data ? this.data.motDePasse : '', Validators.required],
    nom: [this.data ? this.data.nom : '', Validators.required],
    prenom: [this.data ? this.data.prenom : '', Validators.required],
    telephone: [this.data ? this.data.telephone : '', Validators.required],
    idEnseignant: this.data ? this.data.Enseignant : '',
    etablissement: "stringd",
    nombreAbonnes: 0,
    diplome: "null",
    acces: false,
    classe: null,
    filiere: null,
    niveau: null
    });
  }



  ngOnInit() {

    this.enseigantForm.patchValue(this.data);

  }




  onSubmit() {
    if (this.enseigantForm.valid) {
      const data = this.enseigantForm.value;
        // Update
        this.enseignantService.modifierEnseignant(data).subscribe(
          (response) => {
            this.enseigantForm.reset();
            this._dialogRef.close(true);
            localStorage.setItem('enseignant', JSON.stringify(response));
            this.enseignantService.triggerUpdate();
            this.authService.triggerUpdate();
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
        );}
  }

  async alertert(){
    const alert = await this.alertController.create({
      header: 'Erreur de validation',
      message: 'Mot de passe différent',
      buttons: ['OK']
    });
    await alert.present();
  }


}
