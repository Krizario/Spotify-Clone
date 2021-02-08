import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { stringify } from 'querystring';
import { UsersService } from 'src/app/services/users.service';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[SpotifyService]
})
export class HeaderComponent implements OnInit {
  searchQuery: string;
  searchResult: Artist[];
  @Output() onSelectUser = new EventEmitter();
  @Output() onSaveAlbum = new EventEmitter();

  constructor(private modalService:NgbModal, private UsersService:UsersService,
    private _spotifyService:SpotifyService
    ) { }
  Users:any = [];
  userSelected:any;

  ngOnInit(): void {
    this.UsersService.getUsers().subscribe(
      res=>{
        this.Users = res;
        console.log('Users', this.Users);
      },
      error=>{
        console.log(error);
      }
    )
  }


  searchSong(){
 
    
    this._spotifyService.searchSong(this.searchQuery)
    .subscribe(res => {
       this.searchResult =res.albums.items;
      console.log(res.albums.items);
  })
  }


  setToLibrary(album) {
    
    this.UsersService.setAlbumToPlaylist( this.userSelected, album)
    .subscribe(
      res =>{
        console.log(res);
        if(res.ok === 1) {
        this.modalService.dismissAll()
          this.onSaveAlbum.emit(this.userSelected);
      }
      },
      error => console.log(error)
    )
    this.searchResult = null;

  }

  abrirNuevaPlaylist(modal, result){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  abrirModalUsuarios(modal){
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:false
      }
    );
  }

  selectUser(){
    console.log(this.userSelected);
    this.onSelectUser.emit(this.userSelected)
    this.modalService.dismissAll()
  }

}
