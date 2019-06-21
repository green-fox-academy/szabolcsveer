import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTileComponent } from './components/weather-tile/weather-tile.component';
import { WeatherTileItemComponent } from './components/weather-tile-item/weather-tile-item.component';
import { from } from 'rxjs';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { RetrieveWeatherService } from './services/retrieve-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent,
    WeatherTileItemComponent,
    SearchfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RetrieveWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
