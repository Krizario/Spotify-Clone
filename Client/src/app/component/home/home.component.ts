import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() setPlaylists = new EventEmitter();

  sidebarComponent:SidebarComponent;
  mesAlbums: any = []
  existAlbum = false;
regionVisible : string;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.regionVisible = 'home'; 
  }


  getPlaylist(id){
    this.setPlaylists.emit(id);
  }

  getPlaylists(user) {
    console.log('Playlist de l\'utilisateur ', user)
    this.usersService.getUserPlaylists(user).subscribe(
      res=> {
        console.log('MAAAes Albums:', res);
        if(res.playlists.length > 0){
        this.existAlbum = true;
        this.mesAlbums = res.playlists;
      }
      }, error=>console.log(error)
    )
  }
}
