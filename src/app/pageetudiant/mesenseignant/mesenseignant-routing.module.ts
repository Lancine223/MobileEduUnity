import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesenseignantPage } from './mesenseignant.page';

const routes: Routes = [
  {
    path: '',
    component: MesenseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesenseignantPageRoutingModule {}
