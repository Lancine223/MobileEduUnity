import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/model/enseignant';
import { Etudiant } from 'src/app/model/etudiant';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { AbonnerComponent } from '../abonner/abonner.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesenseignant',
  templateUrl: './mesenseignant.page.html',
  styleUrls: ['./mesenseignant.page.scss'],
})
export class MesenseignantPage implements OnInit {

  abonnements: any[]|any;
  etudiantConnect: Etudiant|any;

  // idCla: any;

  constructor(
    private abonnementService: AbonnementService,
    private router: Router,

    private authEtudiantService: AuthetudiantService,
    private _dialog: MatDialog,
  ) {
    this.etudiantConnect = JSON.parse(localStorage.getItem('etudiant')!);
    this.fetchListeAbonnement();
  }

  ngOnInit() {
    this.authEtudiantService.update$.subscribe(() => {
      this.etudiantConnect = JSON.parse(localStorage.getItem('etudiant')!);
    });

    this.abonnementService.update$.subscribe(() => {
      this.fetchListeAbonnement();
    });
  }

  onDocumentClick(idEnseignant: number) {
    // Naviguer vers la page de visualisation du PDF avec le nom du document en tant que paramètre
    this.router.navigate(['/lesprogrammes', idEnseignant]);
  }



  // Exemple d'utilisation
  fetchListeAbonnement(): void {
    const idEtudiant = this.etudiantConnect.idEtudiant;
    this.abonnementService.getListeAbonnementByEtudiant(idEtudiant).subscribe((result) => {
      // Traitement des données reçues
      this.abonnements = result;
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
