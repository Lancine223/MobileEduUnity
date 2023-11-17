import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemarrageComponent } from '../demarrage/demarrage.component';
import { DemarrageDeuxComponent } from '../demarrage-deux/demarrage-deux.component';
import { ConnexionenseignantComponent } from '../connexionenseignant/connexionenseignant.component';
import { ConnexionetudiantComponent } from '../connexionetudiant/connexionetudiant.component';
import { InscriptionenseignantComponent } from '../inscriptionenseignant/inscriptionenseignant.component';
import { InscriptionetudiantComponent } from '../inscriptionetudiant/inscriptionetudiant.component';

const routes: Routes = [
  {
    path: '',
    component: DemarrageComponent,
  },
  {
    path: 'deuxieme',
    component: DemarrageDeuxComponent,
  }
  ,{
    path: 'loginEnseignant',
    component: ConnexionenseignantComponent,
  },
  {
    path: 'loginEtudiant',
    component: ConnexionetudiantComponent,
  },
  {
    path: 'signupEnseignant',
    component: InscriptionenseignantComponent,
  },
  {
    path: 'signupEtudiant',
    component: InscriptionetudiantComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
