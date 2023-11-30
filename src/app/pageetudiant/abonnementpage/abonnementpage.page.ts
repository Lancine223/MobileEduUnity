import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Enseignant } from 'src/app/model/enseignant';
import { Etudiant } from 'src/app/model/etudiant';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { AbonnerComponent } from '../abonner/abonner.component';
import { DetailEnseignantComponent } from '../detail-enseignant/detail-enseignant.component';

@Component({
  selector: 'app-abonnementpage',
  templateUrl: './abonnementpage.page.html',
  styleUrls: ['./abonnementpage.page.scss'],
})
export class AbonnementpagePage implements OnInit {
  enseignants: Enseignant[]|any;
  etudiantConnect: Etudiant|any;

  constructor(
    private enseignantService: EnseignantService,
    private authEtudiantService: AuthetudiantService,
    private _dialog: MatDialog,
  ) {
    this.etudiantConnect = JSON.parse(localStorage.getItem('etudiant')!);
    this.chargerDonner();
  }

  ngOnInit() {
    this.authEtudiantService.update$.subscribe(() => {
      this.etudiantConnect = JSON.parse(localStorage.getItem('etudiant')!);
      this.chargerDonner();
    });

    this.enseignantService.update$.subscribe(() => {
      this.chargerDonner();
    });
  }

  chargerDonner(){
          const idClasse = this.etudiantConnect.classe.idClasse;
            this.enseignantService.getEnseignantListByClasse(idClasse).subscribe(enseg => {
            this.enseignants = enseg;
            });
  }

  openDetailEnsiegnant(data: number, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(DetailEnseignantComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

  // Exemple d'utilisation


  openEditForm(data: Enseignant, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AbonnerComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }


}
