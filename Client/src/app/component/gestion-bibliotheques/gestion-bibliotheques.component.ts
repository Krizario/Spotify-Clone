import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-bibliotheques',
  templateUrl: './gestion-bibliotheques.component.html',
  styleUrls: ['./gestion-bibliotheques.component.css']
})
export class GestionBibliothequesComponent implements OnInit {
  @Output() onVerArtista = new EventEmitter();
  @Output() setPlaylists = new EventEmitter();
  mesAlbums: any = []
  user = "";
  currentAlbum = null;
  currentIndex = -1;
  title = "";
  
  constructor(private usersService:UsersService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.user = params['user'];
      this.getUserAlbum(this.user);
      
  });
}



  
  verArtista(artiste){
    this.onVerArtista.emit(artiste._id);
  }

  getPlaylist(id){
    this.setPlaylists.emit(id);
  }

  getUserAlbum(user) {
    console.log('Playlist de l\'utilisateur ', this.user)
      this.usersService.getUserPlaylists(this.user).subscribe(
        res=> {
          console.log('Mssses Albums:', res);
          this.mesAlbums = res.playlists;
        }, error=>console.log(error)
      )
   
  }

  refreshList() {
    this.getUserAlbum(this.user);
    this.currentAlbum = null;
    this.currentIndex = -1;
  }
  
  setActiveAlbum(album, index) {
    this.currentAlbum = album;
    this.currentIndex = index;
  }

  // searchAlbum() {
  //   this.albumService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }


}
