import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TachePage } from './tache.page';

const routes: Routes = [
  {
    path: '',
    component: TachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachePageRoutingModule {}
