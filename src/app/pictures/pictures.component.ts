import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  cafe = '../../assets/images/cafe.jpg';
  ducha = '../../assets/images/ducha.jpg';
  cambia = '../../assets/images/cambia.jpg';
  constructor() { }

  ngOnInit() {
  }

}
