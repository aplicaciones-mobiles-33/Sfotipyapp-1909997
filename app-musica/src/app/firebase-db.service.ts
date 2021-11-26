import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private http: HttpClient, 
    private fbdb: AngularFireDatabase) { }

    resArray=[];

    getCanciones(){
      return this.http.get('https://sfotipyapp-default-rtdb.firebaseio.com/Canciones.json')
      .pipe(
        map(res => {
          for(const key in res){
            this.resArray.push( {...res[key],key});
          }return this.resArray;
        })
      )
    }

    getCancion(idCancion){
      return this.http.get('https://sfotipyapp-default-rtdb.firebaseio.com/Canciones/'+idCancion+'.json');
    }

    getPlaylist(){
      return this.http.get('https://sfotipyapp-default-rtdb.firebaseio.com/Album.json')
      .pipe(
        map(res => {
          for(const key in res){
            this.resArray.push( {...res[key],key});
          }return this.resArray;
        })
      )
    }


    /*async getAll (collection){
      try{
        return await this.af.collection(collection).snapshotChanges()
      }
      catch (error){
        console.log("error en: ", error)
      }
      
    }

  getCollection<tipo>(path:string): Observable<tipo[]> {
    const Canciones: AngularFirestoreCollection<tipo> =
    this.af.collection<tipo>(path);
    return Canciones.valueChanges();
  }
*/


}
