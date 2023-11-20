import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammeenseignantPageRoutingModule } from './programmeenseignant-routing.module';

import { ProgrammeenseignantPage } from './programmeenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammeenseignantPageRoutingModule
  ],
  declarations: [ProgrammeenseignantPage]
})
export class ProgrammeenseignantPageModule {}
