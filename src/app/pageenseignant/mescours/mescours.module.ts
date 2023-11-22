import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescoursPageRoutingModule } from './mescours-routing.module';

import { MescoursPage } from './mescours.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    IonicModule,
    MescoursPageRoutingModule
  ],
  declarations: [MescoursPage]
})
export class MescoursPageModule {}
