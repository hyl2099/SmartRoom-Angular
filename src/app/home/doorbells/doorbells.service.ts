import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../core/http.service';
import {AppEndpoints} from '../../app-endpoints';
import {MatDialog} from '@angular/material/dialog';
import {Doorbell} from './doorbells.model';

@Injectable()
export class DoorbellsService {

  constructor(private dialog: MatDialog,private httpService: HttpService) {
  }

  readAll(): Observable<Doorbell[]> {
    return this.httpService.get(AppEndpoints.PICTURES_ALL);
  }

  // search(id: string, owner: string, uploadTime: string, remark: string): Observable<Doorbell[]> {
  //   this.httpService.param('id', id);
  //   this.httpService.param('owner', owner);
  //   this.httpService.param('uploadTime', uploadTime);
  //   this.httpService.param('remark', remark);
  //   return this.httpService.get(AppEndpoints.PICTURES);
  // }

  // searchPhoto(id: string): Observable<Doorbell>{
  //   // 带参数用这个，相当于/picturesphoto?id=4
  //   // this.httpService.param('id', picture.id.toString());
  //   // 但后端没有参数，需要/picturesphoto/4
  //   // this.httpService.
  //   return this.httpService.get(AppEndpoints.PICTURES_PHOTO + '/' + id);
  // }
  //
  // create(picture: Doorbell): Observable<Doorbell> {
  //   return this.httpService.post(AppEndpoints.PICTURES_SAVE, picture);
  // }
  //
  // update(newDoorbell: Doorbell): Observable<Doorbell> {
  //   return this.httpService.put(AppEndpoints.PICTURES + '/', newDoorbell);
  // }
}
