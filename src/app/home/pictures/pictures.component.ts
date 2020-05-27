import { Component, OnInit } from '@angular/core';
import {Picture} from './pictures.model';
import {PicturesService} from './pictures.service';
import {PictureCreateUpdateComponent} from './picture_creat_update_dialog/picture-create-update.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent {
  picture: Picture;
  title = 'Pictures';
  columns = ['id', 'owner', 'uploadTime', 'path', 'picture'];
  data: Picture[];
  constructor(private dialog: MatDialog, private picturesService: PicturesService) {
    this.picture = {id: null, owner: '', uploadTime: null, path: '', photo:null};
    this.data = null;
  }

  readAll(){
    this.picturesService.readAll().subscribe(data => this.data = data);
  }

  search() {
    if (this.picture.owner === '' ) {
      this.picturesService.readAll().subscribe(data => this.data = data);
    } else {
      this.picturesService.readAll().subscribe(data => this.data = data);
    }

  }

  resetSearch() {
    this.picture = {id: null, owner: '', uploadTime: null, path: '', photo:null};
  }

  create() {
    this.dialog.open(PictureCreateUpdateComponent, {
      // width: '60%',
      // height: '90%',
      data: {
        // dialogMode: 'create',
        // picture: {}
        update:false
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.readAll();
      }
    });
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
