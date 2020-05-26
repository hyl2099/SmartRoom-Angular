import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Picture} from './pictures.model';
import {HttpService} from '../../core/http.service';
import {AppEndpoints} from '../../app-endpoints';

@Injectable()
export class PicturesService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<Picture[]> {
    return this.httpService.get(AppEndpoints.PICTURES_ALL);
  }

  search(id: string, owner: string, uploadTime: string, path: string): Observable<Picture[]> {
    this.httpService.param('id', id);
    this.httpService.param('owner', owner);
    this.httpService.param('uploadTime', uploadTime);
    this.httpService.param('path', path);
    return this.httpService.get(AppEndpoints.PICTURES);
  }

  create(newLoginRecord: Picture): Observable<Picture> {
    return this.httpService.post(AppEndpoints.PICTURES, newLoginRecord);
  }

  update(newPicture: Picture): Observable<Picture> {
    return this.httpService.put(AppEndpoints.PICTURES + '/', newPicture);
  }
}
