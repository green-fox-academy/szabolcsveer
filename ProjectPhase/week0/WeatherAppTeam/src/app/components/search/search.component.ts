import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [WeatherService]
})
export class SearchComponent implements OnInit {

  cityName: string;

  constructor(private service: WeatherService) {
  }

  ngOnInit() {
  }

  search() {
    console.log("Hello");
    console.log(this.cityName);
    this.service.getWeatherData(this.cityName);

  }
}
