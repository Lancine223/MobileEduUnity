import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesdevoirsenseignantPageRoutingModule } from './mesdevoirsenseignant-routing.module';

import { MesdevoirsenseignantPage } from './mesdevoirsenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesdevoirsenseignantPageRoutingModule
  ],
  declarations: [MesdevoirsenseignantPage]
})
export class MesdevoirsenseignantPageModule {}
