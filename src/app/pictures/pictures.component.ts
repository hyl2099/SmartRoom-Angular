import { Component, OnInit } from '@angular/core';
import {Picture} from './pictures.model';
import {PicturesService} from './pictures.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  picture: Picture;
  title = 'Staff Attendance';
  columns = ['id', 'owner', 'uploadTime', 'path', 'picture'];
  data: Picture[];
  // cafe = '../../assets/images/cafe.jpg';
  // ducha = '../../assets/images/ducha.jpg';
  // cambia = '../../assets/images/cambia.jpg';
  constructor(private picturesService: PicturesService) {
    this.picture = {id: null, owner: '', uploadTime: null, path: ''};
    this.data = null;
  }

  ngOnInit() {
  }

  search() {
    if (this.picture.owner === null || this.picture.uploadTime === null || this.picture.path === null) {
      this.picturesService.readAll();
    } else {
      this.picturesService.readAll();
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
