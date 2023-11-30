import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosEtudiantdiantPage } from './infos-etudiantdiant.page';

const routes: Routes = [
  {
    path: '',
    component: InfosEtudiantdiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosEtudiantdiantPageRoutingModule {}
