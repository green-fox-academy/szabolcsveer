import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RetrieveWeatherService } from 'src/app/services/retrieve-weather.service';
// import { RetrieveWeatherService } from './services/retrieve-weather.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {
  cityName;
  constructor(private retWeather: RetrieveWeatherService) {

   }

  ngOnInit() {
  }

  search() {
    this.retWeather.getCities(this.cityName)
    console.log(this.cityName);
  }
}
