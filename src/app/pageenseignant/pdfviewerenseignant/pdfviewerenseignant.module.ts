import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { PdfviewerenseignantPageRoutingModule } from './pdfviewerenseignant-routing.module';

import { PdfviewerenseignantPage } from './pdfviewerenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    PdfviewerenseignantPageRoutingModule
  ],
  declarations: [PdfviewerenseignantPage]
})
export class PdfviewerenseignantPageModule {}
