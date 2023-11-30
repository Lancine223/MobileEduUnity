import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { AbonnementService } from 'src/app/service/abonnement.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-meseleve',
  templateUrl: './meseleve.page.html',
  styleUrls: ['./meseleve.page.scss'],
})
export class MeselevePage implements OnInit {

  abonnements: any[]|any;
  enseignantConnect: Enseignant|any;

  // idCla: any;

  constructor(
    private abonnementService: AbonnementService,
    private router: Router,

    private authService: AuthService,
  ) {
    this.enseignantConnect = JSON.parse(localStorage.getItem('enseignant')!);
    this.fetchListeAbonnement();
  }


  ngOnInit() {
    this.authService.update$.subscribe(() => {
      this.enseignantConnect = JSON.parse(localStorage.getItem('enseignant')!);
    });

    this.abonnementService.update$.subscribe(() => {
      this.fetchListeAbonnement();
    });
  }

  // Exemple d'utilisation
  fetchListeAbonnement(): void {
    const idEnseignant = this.enseignantConnect.idEnseignant;
    this.abonnementService.getListeAbonnementByEnseignant(idEnseignant).subscribe((result:any) => {
      // Traitement des données reçues
      this.abonnements = result;
      console.log(result);
    });
  }


}
