import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = `FS9etrBst86DERXJcqAuzJDSMq3EFgid`;
  http = inject(HttpClient);

  constructor() {}

  getLocation(city: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${city}`
    );
  }
  getCurrentConditions(locationKey: string) {
    return this.http.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`
    );
  }
  getfiveDaysForecasts(locationKey: string) {
    return this.http.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?metric=true&apikey=${this.apiKey}`
    );
  }
}
