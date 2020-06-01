import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Picture} from './pictures.model';
import {HttpService} from '../../core/http.service';
import {AppEndpoints} from '../../app-endpoints';
import {PicturesDetailDialogComponent} from './picture_detail/pictures-detail-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable()
export class PicturesService {

  constructor(private dialog: MatDialog,private httpService: HttpService) {
  }

  readAll(): Observable<Picture[]> {
    return this.httpService.get(AppEndpoints.PICTURES_ALL);
  }

  search(id: string, owner: string, uploadTime: string, remark: string): Observable<Picture[]> {
    this.httpService.param('id', id);
    this.httpService.param('owner', owner);
    this.httpService.param('uploadTime', uploadTime);
    this.httpService.param('remark', remark);
    return this.httpService.get(AppEndpoints.PICTURES);
  }

  searchPhoto(id: string): Observable<Picture>{
    // 带参数用这个，相当于/picturesphoto?id=4
    // this.httpService.param('id', picture.id.toString());
    // 但后端没有参数，需要/picturesphoto/4
    // this.httpService.
    return this.httpService.get(AppEndpoints.PICTURES_PHOTO + '/' + id);
  }

  create(picture: Picture): Observable<Picture> {
    return this.httpService.post(AppEndpoints.PICTURES_SAVE, picture);
  }

  update(newPicture: Picture): Observable<Picture> {
    return this.httpService.put(AppEndpoints.PICTURES + '/', newPicture);
  }
}
