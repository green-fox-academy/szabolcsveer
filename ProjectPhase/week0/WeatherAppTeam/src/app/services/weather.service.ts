import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  response: any;
  cityName: string;

  constructor(private http: HttpClient) {

   }

   getWeatherData(town:string){
     this.cityName = town;
     console.log(environment.apiURL + this.cityName + environment.apiKey);
     this.http.get(environment.apiURL + this.cityName + environment.apiKey).subscribe(data => {
       this.response = data;

       console.log(this.cityName);
     });
   }

}



// this.retWeather.getCities("Barcelona").subscribe(city => {
//   this.tiles.name = city.name;
//   this.tiles.temp = Math.floor(city.main.temp - 273);
//   this.tiles.icon = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
//   console.log(this.tiles.icon);
//   // console.log(this.tiles);
//   // this.tiles.main.temp = city['main']['temp'];
//   // let temperature: number = Math.floor(city.main.temp - 273)
//   console.log(city);
// });