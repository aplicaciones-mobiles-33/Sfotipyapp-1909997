import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Canciones } from './album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {

  constructor(private fdbs: FirebaseDbService) { }

  canciones = [];

  cargarplaylist(){
    this.fdbs.getPublicaciones().subscribe(res => {
      console.log(res);
      this.canciones = res;
    })
  }

  ngOnInit() { this.cargarplaylist(); }

/*
  getCanciones(){
    const path = 'Canciones';
    this.fdbs.getCollection<Canciones>(path).subscribe(res => {
      this.canciones = res;
    });
  }*/

}
