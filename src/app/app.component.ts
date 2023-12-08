import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { DayForecast } from './components/day-forecast/day-forecast.component';
import { WeekForecast } from './components/week-forecast/week-forecast.component';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
registerLocaleData(pt);

import { HttpClient } from '@angular/common/http';
import { AirQuality } from './components/air-quality/air-quality.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    Header,
    DayForecast,
    WeekForecast,
    AirQuality,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Sunset - Weather Forecast';
  httpClient = inject(HttpClient);
  location: string | undefined;
  data: any;

  fetchLocationData() {
    this.httpClient
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9a2af268c5ae45d59e7170512233007&q=${this.location}&aqi=yes&days=3&lang=pt`
      )
      .subscribe((res: any) => {
        this.data = res;
      });
  }

  setInitialLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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
    this.httpClient
      .get('https://ipinfo.io/json?token=07ca3d466542c2')
      .subscribe((res: any) => {
        const { city, region, country } = res;
        this.location = `${city}, ${region}, ${country}`;
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
