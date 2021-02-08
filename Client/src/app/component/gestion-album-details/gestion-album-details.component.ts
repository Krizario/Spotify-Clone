import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gestion-album-details',
  templateUrl: './gestion-album-details.component.html',
  styleUrls: ['./gestion-album-details.component.css']
})
export class GestionAlbumDetailsComponent implements OnInit {;
  currentAlbum = null;
  message = '';

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    // console.log('TEST',this.route.snapshot.paramMap.get('id'));
    this.getAlbum(this.route.snapshot.paramMap.get('user'), this.route.snapshot.paramMap.get('id'));
  }

  getAlbum( user, id) {
    this.albumsService.get(user, id)
      .subscribe(
        data => {
          this.currentAlbum = data['playlists'][0];
          
        },
        error => {
          console.log(error);
        });
  }

  setToFavori() {
    const data = {
      albumTitle: this.currentAlbum.title,
      albumTitles: this.currentAlbum.titles,
      favori: this.currentAlbum.favori
    };

    this.albumsService.setToFavori(this.route.snapshot.paramMap.get('user'), this.currentAlbum.albumID, data)
      .subscribe(
        response => {
          this.currentAlbum.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }



  // editAlbum() {
  //   this.albumsService.update(this.route.snapshot.paramMap.get('user'), this.currentAlbum.id, this.currentAlbum)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The tutorial was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  removeAlbum() {
    this.albumsService.delete(this.route.snapshot.paramMap.get('user'), this.route.snapshot.paramMap.get('id'))
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/gestion/'+this.route.snapshot.paramMap.get('user')]);
        },
        error => {
          console.log(error);
        });
  }
}
