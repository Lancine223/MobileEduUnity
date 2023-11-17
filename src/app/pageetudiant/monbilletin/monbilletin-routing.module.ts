import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonbilletinPage } from './monbilletin.page';

const routes: Routes = [
  {
    path: '',
    component: MonbilletinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonbilletinPageRoutingModule {}
