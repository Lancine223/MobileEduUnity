import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVideoPageRoutingModule } from './list-video-routing.module';

import { ListVideoPage } from './list-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVideoPageRoutingModule
  ],
  declarations: [ListVideoPage]
})
export class ListVideoPageModule {}
