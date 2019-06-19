import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RetrieveWeatherService {

  constructor(private service: RetrieveWeatherService, private http: HttpClient){
  }

  getWeeatherAPI() {
    let obs = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7ac0e4ff0e3d1eaa97329be8967b8335');
    obs.subscribe((response) => console.log(response));
  }


}
