import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussionEtudiantPageRoutingModule } from './discussion-etudiant-routing.module';

import { DiscussionEtudiantPage } from './discussion-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DiscussionEtudiantPageRoutingModule
  ],
  declarations: [DiscussionEtudiantPage]
})
export class DiscussionEtudiantPageModule {}
