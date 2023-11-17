import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonbilletinPageRoutingModule } from './monbilletin-routing.module';

import { MonbilletinPage } from './monbilletin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonbilletinPageRoutingModule
  ],
  declarations: [MonbilletinPage]
})
export class MonbilletinPageModule {}
