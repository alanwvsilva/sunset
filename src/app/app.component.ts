import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environment/environment';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { DayForecast } from './components/day-forecast/day-forecast.component';
import { WeekForecast } from './components/week-forecast/week-forecast.component';
import { registerLocaleData } from '@angular/common';
import { AirQuality } from './components/air-quality/air-quality.component';
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    Header,
    DayForecast,
    WeekForecast,
    AirQuality,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  title = 'Sunset - Weather Forecast';
  location: string | undefined;
  isAproxLocation: boolean = false;
  data: any;

  /* TODO: Move this function to a service */
  apiRequest(query: string, endpoint: string = 'forecast.json') {
    return this.httpClient.get(
      `https://api.weatherapi.com/v1/${endpoint}?key=${environment.weatherApiKey}&${query}`
    );
  }

  fetchLocationData() {
    this.apiRequest(`q=${this.location}&aqi=yes&days=3&lang=pt`).subscribe(
      (res: any) => {
        this.data = res;
      }
    );
  }

  setInitialLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.isAproxLocation = false;
          this.location = `${position.coords.latitude}, ${position.coords.longitude}`;
          this.fetchLocationData();
        },
        (error) => {
          this.setFallbackLocation();
        }
      );
    } else {
      this.setFallbackLocation();
    }
  }

  setFallbackLocation() {
    this.apiRequest('q=auto:ip', 'ip.json').subscribe((res: any) => {
      this.isAproxLocation = true;
      this.location = `${res.lat}, ${res.lon}`;
      this.fetchLocationData();
    });
  }

  setNewLocation(location: string) {
    this.location = location;
    this.fetchLocationData();
  }

  ngOnInit() {
    this.setInitialLocation();
  }
}
