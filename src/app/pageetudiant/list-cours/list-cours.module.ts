import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCoursPageRoutingModule } from './list-cours-routing.module';

import { ListCoursPage } from './list-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCoursPageRoutingModule
  ],
  declarations: [ListCoursPage]
})
export class ListCoursPageModule {}
