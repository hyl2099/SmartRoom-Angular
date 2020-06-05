import { Component, OnInit } from '@angular/core';
import {TemperatureService} from './temperature.service';
import {Temperature} from './temperature.model';

@Component({
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnInit{
  temperature: Temperature;
  title = 'Temperature And Humidity';
  columns = ['temperature', 'humidity', 'time'];
  data: Temperature[];

  constructor(private temperatureService: TemperatureService){
    this.temperature = {id: null, temperature: null, humidity: null,time: null};
    this.data = null;
  }

  ngOnInit(): void {
    this.temperatureService.readAll().subscribe(data => {
      this.data = data;
    });
  }

  search(){
    this.temperatureService.readAll().subscribe(data => {
      this.data = data;
    });
  }

  resetSearch() {
    this.temperature = {id: null, temperature: null, humidity: null,time: null};
  }

  delete(temperature: Temperature) {
    // TODO
  }
}
