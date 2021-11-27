import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit, OnDestroy {

  constructor(private fdbs: FirebaseDbService) { }

  canciones = [];
  Buscar: String;

  obtenerMusicaSubscribe: Subscription;

  obtenerMusica = this.fdbs.getCanciones();

  ngOnInit() { 
    this.obtenerMusicaSubscribe = this.obtenerMusica.subscribe(res =>{
      this.canciones = res;
    })
  }

  buscar( event ){
    this.Buscar = event.detail.value;
  }

  ngOnDestroy(){ 
    if(this.obtenerMusicaSubscribe){
      this.obtenerMusicaSubscribe.unsubscribe()
    }
  }

/*
  getCanciones(){
    const path = 'Canciones';
    this.fdbs.getCollection<Canciones>(path).subscribe(res => {
      this.canciones = res;
    });
  }*/

}
