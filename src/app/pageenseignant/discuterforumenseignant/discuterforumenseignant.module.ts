import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscuterforumenseignantPageRoutingModule } from './discuterforumenseignant-routing.module';

import { DiscuterforumenseignantPage } from './discuterforumenseignant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscuterforumenseignantPageRoutingModule
  ],
  declarations: [DiscuterforumenseignantPage]
})
export class DiscuterforumenseignantPageModule {}
