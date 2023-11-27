import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonnementpagePage } from './abonnementpage.page';

const routes: Routes = [
  {
    path: '',
    component: AbonnementpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonnementpagePageRoutingModule {}
