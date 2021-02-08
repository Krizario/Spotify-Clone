import { Component, OnInit } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlbumsService } from 'src/app/services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faPlay = faPlay;
  faPlus = faPlus;
  currentAlbum = null;
  constructor(private modalService:NgbModal, private albumsService: AlbumsService, private UsersService:UsersService,
    private _spotifyService:SpotifyService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAlbum(this.route.snapshot.paramMap.get('user'));
  }



  

  getAlbum(id){
 
    
    this._spotifyService.getAlbumByID(id)
    .subscribe(res => {
       this.currentAlbum =res.albums.items;
      console.log(res.albums.items);
  })
  }



}
