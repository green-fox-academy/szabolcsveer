import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import {RetrieveWeatherService} from './retrieve-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RetrieveWeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
