import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PlaylistComponent } from './playlist.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [PlaylistComponent]
})
export class PlaylistModule { }
