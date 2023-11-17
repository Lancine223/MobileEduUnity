import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachePageRoutingModule } from './tache-routing.module';

import { TachePage } from './tache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachePageRoutingModule
  ],
  declarations: [TachePage]
})
export class TachePageModule {}
