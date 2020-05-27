import {Component, Inject} from '@angular/core';
import {PicturesService} from '../pictures.service';
import {Picture} from '../pictures.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';


@Component({
  templateUrl: './picture-create-update.component.html',
  styleUrls: ['./picture-create-update.component.css']
})
export class PictureCreateUpdateComponent {

  picture: Picture = {
    id:null,
    owner: null,
    uploadTime: null,
    path: null
  };

  update: boolean;
  active: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
              private dialog: MatDialog,
              private message: MatSnackBar,
              private picturesService: PicturesService) {
    this.update = data.update;
  }

  createPicture() {
    this.picturesService.create(this.picture).subscribe(
      () => this.dialog.closeAll()
      , () => this.message.open('User created successfully', null, {
        duration: 2000,
      })
    );
  }
}
