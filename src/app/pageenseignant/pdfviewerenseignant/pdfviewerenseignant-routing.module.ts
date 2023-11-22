import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfviewerenseignantPage } from './pdfviewerenseignant.page';

const routes: Routes = [
  {
    path: '',
    component: PdfviewerenseignantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfviewerenseignantPageRoutingModule {}
