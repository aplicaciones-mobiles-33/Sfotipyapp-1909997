import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionComponent } from './cancion.component';

const routes: Routes = [
    {
        path: '',
        component: CancionComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CancionRountingModule {}