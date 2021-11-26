import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';
import { CancionModule } from './cancion.module';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss'],
})
export class CancionComponent implements OnInit {

  cancionId: any;

  volver(): void {
    this._location.back();
  }

  constructor(private RutaActiva: ActivatedRoute,
    private _location: Location,
    private db: FirebaseDbService) { }

    imagen: any;
    titulo: any;
    autor: any;


  obtenerDetalleCancion(param): void {
    this.db.getCancion(param).subscribe(res => {
      console.log(res);

      let respuesta = Object.assign(res);

      this.imagen = respuesta.imagen;
      this.autor = respuesta.autor;
      this.titulo = respuesta.titulo;
    })
  }

  ngOnInit() {

    this.cancionId = this.RutaActiva.snapshot.params.id;
    console.log(this.RutaActiva.snapshot.params.id);
    this.obtenerDetalleCancion(this.cancionId);

  }

}
