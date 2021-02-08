import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
    user = "";
    
    api = 'http://localhost:8888';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.user = params['user'];
 
      
  });
}




  get(user, id) {
      console.log("ssss"+`${this.api}/users/${user}/playlists/${id}`);
    return this.http.get(`${this.api}/users/${user}/playlists/${id}`);
  }

  create(data) {
    return this.http.post(this.api, data);
  }

  setToFavori(user, id, data) {
    return this.http.put(`${this.api}/users/${user}/playlists/${id}/favourite`, data);
  }

 

  


  delete(user, id) {
    return this.http.delete(`${this.api}/users/${user}/playlists/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.api);
  }

  findByTitle(title) {
    return this.http.get(`${this.api}?title=${title}`);
  }
}