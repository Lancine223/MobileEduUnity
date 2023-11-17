import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesprogrammesPageRoutingModule } from './lesprogrammes-routing.module';

import { LesprogrammesPage } from './lesprogrammes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesprogrammesPageRoutingModule
  ],
  declarations: [LesprogrammesPage]
})
export class LesprogrammesPageModule {}
