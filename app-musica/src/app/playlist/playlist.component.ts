import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit, OnDestroy {

  constructor(private db: FirebaseDbService) { }

  playlists = [];
  Buscar: string;

  obtenerPlaylistSubscribe: Subscription;

  obtenerPlaylist = this.db.getPlaylist();

  ngOnInit() { 
    this.obtenerPlaylistSubscribe = this.obtenerPlaylist.subscribe(res => {
      this.playlists = res;
    })
  }

  buscar( event ){
    this.Buscar = event.detail.value;
  }


  ngOnDestroy() { 
    if(this.obtenerPlaylistSubscribe){
      this.obtenerPlaylistSubscribe.unsubscribe();
    }
  }

}
