import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/model/enseignant';
import { Etudiant } from 'src/app/model/etudiant';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { AbonnerComponent } from '../abonner/abonner.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mesenseignant',
  templateUrl: './mesenseignant.page.html',
  styleUrls: ['./mesenseignant.page.scss'],
})
export class MesenseignantPage implements OnInit {

  enseignants: Enseignant[]|any;
  etudiantConnect: Etudiant|any;

  constructor(
    private abonnementService: AbonnementService,
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

  // Exemple d'utilisation
  fetchListeAbonnement(idEtudiant: number): void {
    this.abonnementService.getListeAbonnementByEtudiant(idEtudiant).subscribe((result) => {
      // Traitement des données reçues
      console.log(result);
    });
  }

  createBestAbonnement(idEtudiant: number, abonnement: any): void {
    this.abonnementService.createBestAbonnement(idEtudiant, abonnement).subscribe((result) => {
      // Traitement des données reçues après la création
      console.log(result);
    });
  }

  openEditForm(data: Enseignant, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AbonnerComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
