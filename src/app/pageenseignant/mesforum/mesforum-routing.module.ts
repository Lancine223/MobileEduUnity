import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesforumPage } from './mesforum.page';

const routes: Routes = [
  {
    path: '',
    component: MesforumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesforumPageRoutingModule {}
