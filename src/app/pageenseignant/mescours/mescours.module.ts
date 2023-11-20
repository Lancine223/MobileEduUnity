import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescoursPageRoutingModule } from './mescours-routing.module';

import { MescoursPage } from './mescours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MescoursPageRoutingModule
  ],
  declarations: [MescoursPage]
})
export class MescoursPageModule {}
