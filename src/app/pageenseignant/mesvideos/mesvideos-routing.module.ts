import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesvideosPage } from './mesvideos.page';

const routes: Routes = [
  {
    path: '',
    component: MesvideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesvideosPageRoutingModule {}
