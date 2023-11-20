import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesforumPageRoutingModule } from './mesforum-routing.module';

import { MesforumPage } from './mesforum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesforumPageRoutingModule
  ],
  declarations: [MesforumPage]
})
export class MesforumPageModule {}
