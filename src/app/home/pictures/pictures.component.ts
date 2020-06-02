import {Component, OnInit} from '@angular/core';
import {Picture} from './pictures.model';
import {PicturesService} from './pictures.service';
import {PictureCreateUpdateComponent} from './picture_creat_update_dialog/picture-create-update.component';
import {MatDialog} from '@angular/material/dialog';
import {PicturesDetailDialogComponent} from './picture_detail/pictures-detail-dialog.component';
import {HttpService} from '../../core/http.service';

@Component({
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit{
  pictures: Picture[] =[];
  title = 'Pictures';
  constructor(private dialog: MatDialog, private picturesService: PicturesService,private httpService: HttpService) {
    this.pictures= null;
  }

  ngOnInit(): void {
    this.httpService.getPictures().subscribe(response=>{
      this.pictures = response;
    });
  }

  readAll(){
    this.picturesService.readAll().subscribe(
      data => {this.pictures = data;
        }
    );
  }

  // search() {
  //   if (this.picture.owner === '' ) {
  //     this.picturesService.readAll().subscribe(data => this.data = data);
  //   } else {
  //     this.picturesService.readAll().subscribe(data => this.data = data);
  //   }
  //
  // }
  //
  // resetSearch() {
  //   this.picture = {id: null, owner: '', uploadTime: null, path: '', photo:null, remark:''};
  // }

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
    this.dialog.open(PicturesDetailDialogComponent,
      {
        // width: '400px',
        data: {
          id: picture.id
        }
      }
    );
  }

  update(picture: Picture) {
    // TODO
  }

  delete(picture: Picture) {
    // TODO
  }

}
