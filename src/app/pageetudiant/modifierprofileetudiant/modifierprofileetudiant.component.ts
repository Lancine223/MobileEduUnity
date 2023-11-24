import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Etudiant } from 'src/app/model/etudiant';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-modifierprofileetudiant',
  templateUrl: './modifierprofileetudiant.component.html',
  styleUrls: ['./modifierprofileetudiant.component.scss'],
})
export class ModifierprofileetudiantComponent  implements OnInit {

  etudiantForm: FormGroup;
  alertController: any;

  constructor(
    private _dialogRef: MatDialogRef<ModifierprofileetudiantComponent>,
    private formBuilder: FormBuilder,
    private authEtService: AuthetudiantService,
    private _dialog: MatDialog,
    private etudiantService: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public data: Etudiant | any
  ) {
    this.etudiantForm = this.formBuilder.group({
    motDePasse: [this.data ? this.data.motDePasse : '', Validators.required],
    nom: [this.data ? this.data.nom : '', Validators.required],
    prenom: [this.data ? this.data.prenom : '', Validators.required],
    telephone: [this.data ? this.data.telephone : '', Validators.required],
    idEtudiant: this.data ? this.data.Etudiant : '',
    age: this.data ? this.data.age : '',
    estAbonner: 0,
    classe: null,
    filiere: null,
    niveau: null
    });
  }



  ngOnInit() {

    this.etudiantForm.patchValue(this.data);

  }




  onSubmit() {
    if (this.etudiantForm.valid) {
      const data = this.etudiantForm.value;
        // Update
        this.etudiantService.modifierEnseignant(data).subscribe(
          (response) => {
            this.etudiantForm.reset();
            this._dialogRef.close(true);
            localStorage.setItem('etudiant', JSON.stringify(response));
            this.etudiantService.triggerUpdate();
            this.authEtService.triggerUpdate();
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
