import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeselevePageRoutingModule } from './meseleve-routing.module';

import { MeselevePage } from './meseleve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeselevePageRoutingModule
  ],
  declarations: [MeselevePage]
})
export class MeselevePageModule {}
