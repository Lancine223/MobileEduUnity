import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesprogrammesPage } from './lesprogrammes.page';

const routes: Routes = [
  {
    path: '',
    component: LesprogrammesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesprogrammesPageRoutingModule {}
