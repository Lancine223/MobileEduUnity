import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListForumPage } from './list-forum.page';

const routes: Routes = [
  {
    path: '',
    component: ListForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListForumPageRoutingModule {}
