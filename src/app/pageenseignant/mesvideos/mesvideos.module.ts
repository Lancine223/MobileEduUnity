import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesvideosPageRoutingModule } from './mesvideos-routing.module';

import { MesvideosPage } from './mesvideos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesvideosPageRoutingModule
  ],
  declarations: [MesvideosPage]
})
export class MesvideosPageModule {}
