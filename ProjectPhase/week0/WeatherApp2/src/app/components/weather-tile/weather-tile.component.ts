import { Component, OnInit } from '@angular/core';
import { WeatherTile } from '../../models/WeatherTile';
import { RetrieveWeatherService } from '../../services/retrieve-weather.service';
@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {
  tiles: WeatherTile[];
  constructor(private retWeather: RetrieveWeatherService) { }

  ngOnInit() {
  }

}
