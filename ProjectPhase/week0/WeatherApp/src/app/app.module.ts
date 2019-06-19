import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import {RetrieveWeatherService} from './retrieve-weather.service';
import { SearchfieldComponent } from './searchfield/searchfield.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent,
    SearchfieldComponent
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
