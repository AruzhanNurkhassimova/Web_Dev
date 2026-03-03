import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import {Album} from '../../models/album.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AlbumService} from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
    albums$!: Observable<Album[]>;
    loading = true;

    constructor(private albumService: AlbumService) {}

    ngOnInit() {
      this.albums$ = this.albumService.getAlbums();
      this.loading = false;
    }

    delete(id: number) {
      this.albumService.deleteAlbum(id).subscribe(() => {
        this.albums$ = this.albumService.getAlbums();
      });
    }
}
