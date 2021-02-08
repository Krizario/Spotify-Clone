import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  @ViewChild('sidebar')
  sidebarComponent:SidebarComponent;
  @ViewChild('home')
  homeComponent:HomeComponent;
  title = 'Spotify_Zahid';

  regionVisible:string = '';


  getPlaylist(id){
    this.regionVisible = 'home';
    console.log('Playlist avec ID : ' + id);
  }

  selectUser(user) {
    console.log("Selected user ", user)
    this.sidebarComponent.getPlaylists(user)
    this.homeComponent.getPlaylists(user)
  }

  reloadPlaylist(user) {
    this.sidebarComponent.getPlaylists(user)
  }
}
