import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesenseignantPageRoutingModule } from './mesenseignant-routing.module';

import { MesenseignantPage } from './mesenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesenseignantPageRoutingModule
  ],
  declarations: [MesenseignantPage]
})
export class MesenseignantPageModule {}
