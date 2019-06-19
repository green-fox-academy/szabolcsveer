import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetrieveWeatherService {

  printToConsole(arg) {
    console.log(arg);
  }


}
