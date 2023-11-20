import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesquizPage } from './mesquiz.page';

const routes: Routes = [
  {
    path: '',
    component: MesquizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesquizPageRoutingModule {}
