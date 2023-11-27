import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadoneCoursPage } from './readone-cours.page';

const routes: Routes = [
  {
    path: '',
    component: ReadoneCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadoneCoursPageRoutingModule {}
