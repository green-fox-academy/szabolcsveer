import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetrieveWeatherService } from './retrieve-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  constructor(private service: RetrieveWeatherService, private http: HttpClient){
    service.printToConsole("Got SERVICE!");
  }

  ngOnInit() {
    let obs = this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7ac0e4ff0e3d1eaa97329be8967b8335');
    obs.subscribe((response) => console.log(response));
  }

}
