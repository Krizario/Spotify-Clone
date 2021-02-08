import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUserPlaylists(user):Observable<any> {
 
    return this.httpClient.get('http://localhost:8888/Users/'+user+'/playlists/', {})
  }

  getUserFavoris(user):Observable<any> {
 
    return this.httpClient.get('http://localhost:8888/Users/'+user+'/favoris', {})
  }

setAlbumToPlaylist(idUser, result): Observable<any> {
  return this.httpClient.post(`http://localhost:8888/Users/${idUser}/playlists/`, {
      albumTitle: result.name,
      albumImage: result.images[0].url,
      albumReleaseDate: result.release_date,
      albumArtist: result.artists[0].name,
      albumTitles: result.total_tracks,
      albumID: result.id

  })
}

  getUsers():Observable<any>{
    return this.httpClient.get('http://localhost:8888/Users',{});
  }



}
