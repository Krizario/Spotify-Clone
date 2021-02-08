import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
@Injectable()
export class SpotifyService {
    private searchAPI: string;
    private getAlbum: string;
    
    private auth_token = "";
    private spotifyAPI = "https://api.spotify.com/v1";
    constructor(private _http: Http){
        this._http.get('assets/spotify_api_token.txt').subscribe(data => {
            this.auth_token = data.text();
        })
    }
    
    
    searchSong(q: string, type='album,artist'){
          const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.auth_token}`
          })
         
        
        this.searchAPI = this.spotifyAPI+'/search?q='+q+'&type='+type+'&offset=0&limit=20&market=FR';
        return this._http.get(this.searchAPI, { headers: headers })
        .pipe(map(res => res.json()));

    }

    getAlbumByID(id: string){
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.auth_token}`
        })
       
      
      this.getAlbum = `${this.spotifyAPI}/albums/${id}`;
      return this._http.get(this.getAlbum, { headers: headers })
      .pipe(map(res => res.json()));

  }
}