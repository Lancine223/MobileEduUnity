import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscuterforumenseignantPage } from './discuterforumenseignant.page';

const routes: Routes = [
  {
    path: '',
    component: DiscuterforumenseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscuterforumenseignantPageRoutingModule {}
