import { Component,OnDestroy, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy, OnInit {

  carussel = [];

  obtenerMusicaSubscribe: Subscription;

  obtenerMusica = this.fdbs.getCanciones();

  constructor(private fdbs: FirebaseDbService) {}

  option = {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10
  }

  ngOnInit(){
    this.obtenerMusicaSubscribe = this.obtenerMusica.subscribe(res =>{
      this.carussel = res;
    })
  }

  ngOnDestroy(){
    if(this.obtenerMusicaSubscribe){
      this.obtenerMusicaSubscribe.unsubscribe()
    }
  }

}
