import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthetudiantService } from './service/authetudiant.service';
import { Enseignant } from './model/enseignant';
import { Etudiant } from './model/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  enseignant: Enseignant|undefined;
  etudiant: Etudiant|undefined;
  constructor(
    private authService: AuthService,
    private authEtSerice: AuthetudiantService,
    private router: Router,
  ) {


  }
  ngOnInit(){
    this.authService.update$.subscribe(() => {
      this.enseignant = this.authService.getEnseignantConnect();
    });

    this.authEtSerice.update$.subscribe(() => {
      this.etudiant = this.authEtSerice.getEtudiantConnect();
    });
  }

  deconnexionEnseig() {
    this.authService.deconnecter(); // Appel de la méthode de déconnexion du service // Appel de la méthode de déconnexion du service
    this.router.navigate(['home/deuxieme']);// Ajoutez ici la logique pour rediriger l'utilisateur vers la page de connexion ou une autre page
  }
  deconnexionEtudiant() {
    this.authEtSerice.deconnecter(); // Appel de la méthode de déconnexion du service // Appel de la méthode de déconnexion du service
    this.router.navigate(['home/deuxieme']);// Ajoutez ici la logique pour rediriger l'utilisateur vers la page de connexion ou une autre page
  }


}
