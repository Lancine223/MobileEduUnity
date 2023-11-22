import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Apropos } from 'src/app/model/apropos';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-ajouterapropos',
  templateUrl: './ajouterapropos.component.html',
  styleUrls: ['./ajouterapropos.component.scss'],
})
export class AjouteraproposComponent  implements OnInit {
  aproposForm: FormGroup;
  enseignant: Enseignant|undefined;
  alertController: any;

  constructor(
    private _dialogRef: MatDialogRef<AjouteraproposComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private enseignantService: EnseignantService,
    @Inject(MAT_DIALOG_DATA) public data: Apropos | any
  ) {
    this.enseignant = this.authService.getEnseignantConnect();
    this.aproposForm = this.formBuilder.group({
      idApropos: this.data ? this.data.Apropos : '', // Si c'est une modification, initialisez avec l'ID existant
      biographie: [this.data ? this.data.biographie : '', Validators.required],
      enseignant: this.enseignant, //

    });
  }
  ngOnInit(): void {
    this.aproposForm.patchValue(this.data);
    this.authService.update$.subscribe(() => {
      this.enseignant = this.authService.getEnseignantConnect();
    });
  }

  onSubmit() {
    if (this.aproposForm.valid) {
      const data = this.aproposForm.value;
      if (this.data) {
        // Update
        this.enseignantService.modifierApropos(data).subscribe(
          (response) => {
            this.aproposForm.reset();
            this._dialogRef.close(true);
            this.enseignantService.triggerUpdate();
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



        this.enseignantService.creerApropos(data).subscribe(
          (response) => {

            this.aproposForm.reset();
            this._dialogRef.close(true);
            this.enseignantService.triggerUpdate();
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
        this.enseignantService.triggerUpdate();


      }

    }

  }

}
