import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionEtudiantPage } from './discussion-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: DiscussionEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscussionEtudiantPageRoutingModule {}
