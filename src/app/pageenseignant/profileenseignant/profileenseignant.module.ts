import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileenseignantPageRoutingModule } from './profileenseignant-routing.module';

import { ProfileenseignantPage } from './profileenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileenseignantPageRoutingModule
  ],
  declarations: [ProfileenseignantPage]
})
export class ProfileenseignantPageModule {}
