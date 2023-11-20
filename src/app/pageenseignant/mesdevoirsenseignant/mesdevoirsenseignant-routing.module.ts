import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesdevoirsenseignantPage } from './mesdevoirsenseignant.page';

const routes: Routes = [
  {
    path: '',
    component: MesdevoirsenseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesdevoirsenseignantPageRoutingModule {}
