import {Component, Inject, OnInit} from '@angular/core';
// @ts-ignore
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {PicturesService} from '../pictures.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Picture} from '../pictures.model';


@Component({
  selector: 'app-stock-alarm-create-dialog',
  templateUrl: './picture-create-update.component.html',
  styleUrls: ['./picture-create-update.component.css']
})
export class PictureCreateUpdateComponent implements OnInit {

  pictures: Picture[];
  picture: Picture;
  pictureFrom: FormGroup;
  dialogMode: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private fb: FormBuilder,
              public picturesService: PicturesService, ) {
    this.picture = data.picture;
    this.dialogMode = data.dialogMode;
  }
  ngOnInit() {
    this.pictureFrom = this.fb.group({
      owner: [this.picture.owner, [Validators.required]],
      uploadTime: [this.picture.uploadTime, [Validators.required]],
      path: [this.picture.path, [Validators.required]],
      // warning: [this.picture.path, [Validators.min(0)]],
      });
  }

  createOrUpdate() {
    this.data.dialogMode === 'create'
      ? this.create()
      : this.update();
  }

  create() {
    console.log(this.pictureFrom.value);
    this.picturesService.create(this.pictureFrom.value).subscribe(
      result => {
        console.log(result);
      }
    );
  }

  update() {
    this.picturesService.update(this.pictureFrom.value).subscribe(
      result => {
        console.log(result);
      }
    );
  }

}
