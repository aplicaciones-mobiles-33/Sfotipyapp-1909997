import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CancionComponent } from './cancion.component';
import { CancionRountingModule } from './cancion-rounting.module';


@NgModule({
  declarations: [CancionModule],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CancionComponent}]),
    CancionRountingModule
  ]
})
export class CancionModule { }
