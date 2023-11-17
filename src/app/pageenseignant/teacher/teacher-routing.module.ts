import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage
  },
  {
    path: 'TeacherPage',
    component: TeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
