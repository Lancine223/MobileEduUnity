import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeselevePage } from './meseleve.page';

const routes: Routes = [
  {
    path: '',
    component: MeselevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeselevePageRoutingModule {}
