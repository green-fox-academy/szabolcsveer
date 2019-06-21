import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherTile } from '../models/WeatherTile';
import { Observable, from } from 'rxjs';
import { BehaviourSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class RetrieveWeatherService {
  constructor(private http: HttpClient) { }


  private source = new BehaviourSubject<WeatherTile>();
  currentValue = this.source.asObservable();

  getData(data: any){
    this.source.next(data);
  }
  getCities(cityName): Observable<WeatherTile> {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=7ac0e4ff0e3d1eaa97329be8967b8335`;
    return this.http.get<WeatherTile>(weatherUrl);
    }
}
