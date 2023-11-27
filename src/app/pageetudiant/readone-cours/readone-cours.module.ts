import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { ReadoneCoursPageRoutingModule } from './readone-cours-routing.module';

import { ReadoneCoursPage } from './readone-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    IonicModule,
    ReadoneCoursPageRoutingModule
  ],
  declarations: [ReadoneCoursPage]
})
export class ReadoneCoursPageModule {}
