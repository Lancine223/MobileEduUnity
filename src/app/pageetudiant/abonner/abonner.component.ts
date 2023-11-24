import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Enseignant } from 'src/app/model/enseignant';
import { Etudiant } from 'src/app/model/etudiant';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';

@Component({
  selector: 'app-abonner',
  templateUrl: './abonner.component.html',
  styleUrls: ['./abonner.component.scss'],
})
export class AbonnerComponent  implements OnInit {
  abonnerForm: FormGroup;
  etudiant: Etudiant|any;
  alertController: any;

  constructor(
    private _dialogRef: MatDialogRef<AbonnerComponent>,
    private formBuilder: FormBuilder,
    private authEtudiantService: AuthetudiantService,
    private abonnemenServ: AbonnementService,
    @Inject(MAT_DIALOG_DATA) public data: Enseignant | any
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.abonnerForm = this.formBuilder.group({
       dateAbonnement: new Date,
      montant: [ , Validators.required],
      etudiant: this.etudiant,
      telephone: [ , Validators.required],
      enseignant: this.data

    });



  }
  ngOnInit(): void {
    this.abonnerForm.patchValue(this.data);
    this.authEtudiantService.update$.subscribe(() => {
      this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });
    console.log('etudiant value ', this.etudiant);
  }

  onSubmit() {
    if (this.abonnerForm.valid) {
      const donner = this.abonnerForm.value;
      console.log("formulaire :", donner);
        // Update
        this.abonnemenServ.createBestAbonnement(this.etudiant.idEtudiant, donner).subscribe(
          (result) => {

          // Traitement des données reçues après la création
          this.abonnerForm.reset();
          this._dialogRef.close(true);
          this.abonnemenServ.triggerUpdate();
          console.log(result);
        },
        async (error) => {
          const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Important message',
            message: error.error.message,
            buttons: ['OK'],
          });

          await alert.present();
        }
        );


    }

  }

  creerAbonnement() {
    const idEtudiant = this.etudiant.idEtudiant; // Remplacez par l'ID réel
    const nouvelAbonnement = {
      // Propriétés de votre nouvel abonnement
    };

    this.abonnemenServ.createBestAbonnement(idEtudiant, nouvelAbonnement)
      .subscribe(
        response => {
          console.log('Abonnement créé avec succès :', response);
          // Vous pouvez effectuer des actions supplémentaires après la création réussie.
        },
        error => {
          console.error('Erreur lors de la création de l\'abonnement :', error);
          // Gérez l'erreur selon vos besoins.
        }
      );
  }


}
