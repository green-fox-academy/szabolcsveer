import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css'],
  providers: [WeatherService]
})
export class WeatherTileComponent implements OnInit {
  cityName: string;
  temperature: number;
  icon: any;
  country: string;
  pictureLink: string;

  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.service.cityName = this.cityName;
  }

}
