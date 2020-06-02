import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpService} from '../../core/http.service';

@Component({
  templateUrl: './doorbells.component.html',
  styleUrls: ['./doorbells.component.css']
})
export class DoorbellsComponent implements OnInit{
  title = 'Images';
  public images: any =[];

  constructor(private httpService: HttpService){}
  ngOnInit(): void {
    this.httpService.getImages().subscribe(response=>{
      this.images = response;
    });
  }
}
