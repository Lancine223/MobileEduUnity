import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonnementpagePageRoutingModule } from './abonnementpage-routing.module';

import { AbonnementpagePage } from './abonnementpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonnementpagePageRoutingModule
  ],
  declarations: [AbonnementpagePage]
})
export class AbonnementpagePageModule {}
