import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileenseignantPage } from './profileenseignant.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileenseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileenseignantPageRoutingModule {}
