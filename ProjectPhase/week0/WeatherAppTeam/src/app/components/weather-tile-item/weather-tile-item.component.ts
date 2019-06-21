import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather-tile-item',
  templateUrl: './weather-tile-item.component.html',
  styleUrls: ['./weather-tile-item.component.css'],
  providers: [WeatherService]
})
export class WeatherTileItemComponent implements OnInit {
  cityName: string;
  temperature: number;
  icon: any;
  country: string;
  pictureLink: string;

  constructor(private service: WeatherService) { 

  }
  
  ngOnInit() {
    this.service.getWeatherData('');

  }
}
