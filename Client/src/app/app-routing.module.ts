import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionBibliothequesComponent} from './component/gestion-bibliotheques/gestion-bibliotheques.component'
import { GestionAlbumDetailsComponent } from './component/gestion-album-details/gestion-album-details.component';
import { AlbumComponent } from './component/album/album.component';

const routes: Routes = [
  {
    path: 'gestion/:user', component: GestionBibliothequesComponent
  },
  {
    path: 'gestion/:user/album/:id', component: GestionAlbumDetailsComponent
  },
  {
    path: 'album/:id', component: AlbumComponent
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
