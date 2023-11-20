import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesquizPageRoutingModule } from './mesquiz-routing.module';

import { MesquizPage } from './mesquiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesquizPageRoutingModule
  ],
  declarations: [MesquizPage]
})
export class MesquizPageModule {}
