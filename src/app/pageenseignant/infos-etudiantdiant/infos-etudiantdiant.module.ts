import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosEtudiantdiantPageRoutingModule } from './infos-etudiantdiant-routing.module';

import { InfosEtudiantdiantPage } from './infos-etudiantdiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosEtudiantdiantPageRoutingModule
  ],
  declarations: [InfosEtudiantdiantPage]
})
export class InfosEtudiantdiantPageModule {}
