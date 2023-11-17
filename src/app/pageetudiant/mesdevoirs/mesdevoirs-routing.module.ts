import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesdevoirsPage } from './mesdevoirs.page';

const routes: Routes = [
  {
    path: '',
    component: MesdevoirsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesdevoirsPageRoutingModule {}
