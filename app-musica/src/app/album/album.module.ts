import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlbumComponent } from './album.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    PipesModule
  ],
  exports: [AlbumComponent]
})
export class AlbumModule { }
