import { Component, OnInit , Input} from '@angular/core';
import { WeatherTile } from 'src/app/models/WeatherTile';
import { RetrieveWeatherService } from 'src/app/services/retrieve-weather.service';
// import { WeatherTile } from '../../models/WeatherTile';

@Component({
  selector: 'app-weather-tile-item',
  templateUrl: './weather-tile-item.component.html',
  styleUrls: ['./weather-tile-item.component.css']
})
export class WeatherTileItemComponent implements OnInit {
  tiles: WeatherTile = {
    name: '',
    main: '',
    temp: 0,
    weather: '',
    icon: ''};
  // @Input() tiles: WeatherTile;
  constructor(private retWeather: RetrieveWeatherService) { }

  ngOnInit() {

    this.retWeather.getCities("Barcelona").subscribe(city => {
      this.tiles.name = city.name;
      this.tiles.temp = Math.floor(city.main.temp - 273);
      this.tiles.icon = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
      console.log(this.tiles.icon);
      // console.log(this.tiles);
      // this.tiles.main.temp = city['main']['temp'];
      // let temperature: number = Math.floor(city.main.temp - 273)
      console.log(city);
    });
  }

}
