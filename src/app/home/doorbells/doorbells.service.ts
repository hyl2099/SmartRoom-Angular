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

}
