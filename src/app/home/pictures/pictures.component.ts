import { Component, OnInit } from '@angular/core';
import {Picture} from './pictures.model';
import {PicturesService} from './pictures.service';

@Component({
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent {
  picture: Picture;
  title = 'Pictures';
  columns = ['id', 'owner', 'uploadTime', 'path', 'picture'];
  data: Picture[];
  constructor(private picturesService: PicturesService) {
    this.picture = {id: null, owner: '', uploadTime: null, path: ''};
    this.data = null;
  }

  search() {
    if (this.picture.owner === '' ) {
      this.picturesService.readAll().subscribe(data => this.data = data);
    } else {
      this.picturesService.readAll().subscribe(data => this.data = data);
    }

  }

  resetSearch() {
    this.picture = {id: null, owner: '', uploadTime: null, path: ''};
  }

  create() {
    // TODO

  }

  read(picture: Picture) {
    // TODO
  }

  update(picture: Picture) {
    // TODO
  }

  delete(picture: Picture) {
    // TODO
  }

}
