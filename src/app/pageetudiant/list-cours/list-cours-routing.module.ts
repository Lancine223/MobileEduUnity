import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursPage } from './list-cours.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursPageRoutingModule {}
