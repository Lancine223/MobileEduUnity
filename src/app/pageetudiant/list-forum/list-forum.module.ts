import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListForumPageRoutingModule } from './list-forum-routing.module';

import { ListForumPage } from './list-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListForumPageRoutingModule
  ],
  declarations: [ListForumPage]
})
export class ListForumPageModule {}
