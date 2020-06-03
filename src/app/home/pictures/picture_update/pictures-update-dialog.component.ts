import {Component, Inject, OnInit} from '@angular/core';
import {Picture} from '../pictures.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PicturesService} from '../pictures.service';


@Component({
  templateUrl: 'pictures-update-dialog.component.html',
  styleUrls: ['pictures-update.component.css']
})

export class PicturesUpdateDialogComponent implements OnInit{
  picture: Picture;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<PicturesUpdateDialogComponent>,
              private message: MatSnackBar, private picturesService: PicturesService) {
    this.picture=data;
  }

  ngOnInit(): void {
    // this.picturesService.searchById(this.id).subscribe(
    //   response => {this.picture = response;}
    // );
  }
  update() {
    this.picturesService.update(this.picture).subscribe(
      () => this.dialog.closeAll()
      , () => this.message.open('Something wrong', null, {
        duration: 2000,
      })
      , () => this.message.open('Updated successfully!', null, {
        duration: 2000,
      })
    );
  }

}
