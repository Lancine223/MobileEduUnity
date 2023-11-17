import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesdevoirsPageRoutingModule } from './mesdevoirs-routing.module';

import { MesdevoirsPage } from './mesdevoirs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesdevoirsPageRoutingModule
  ],
  declarations: [MesdevoirsPage]
})
export class MesdevoirsPageModule {}
