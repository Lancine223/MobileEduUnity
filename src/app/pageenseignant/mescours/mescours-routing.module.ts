import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MescoursPage } from './mescours.page';

const routes: Routes = [
  {
    path: '',
    component: MescoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MescoursPageRoutingModule {}
