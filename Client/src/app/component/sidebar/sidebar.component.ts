import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';

import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Output() setPlaylists = new EventEmitter();
  
  
  faMusic = faMusic;
  faPlay = faPlay;
  mesAlbums: any = []

  
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {

  }

  
  getPlaylist(id){
    this.setPlaylists.emit(id);
  }

  getPlaylists(user) {
    console.log('Favoris de l\'utilisateur ', user)
    this.usersService.getUserFavoris(user).subscribe(
      res=> {
        console.log('Mes Albums:', res);
        this.mesAlbums = res.playlists;
      }, error=>console.log(error)
    )
  }
}
