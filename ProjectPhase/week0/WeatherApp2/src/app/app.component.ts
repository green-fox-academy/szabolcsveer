import { Component } from '@angular/core';
import { RetrieveWeatherService } from 'src/app/services/retrieve-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp2';

  constructor(private retWeather: RetrieveWeatherService) { 

  }

  search() {
    // this.retWeather.getCities("Barcelona").subscribe(city => {

    // });
  }
}
