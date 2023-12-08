import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { DayForecast } from './components/day-forecast/day-forecast.component';
import { WeekForecast } from './components/week-forecast/week-forecast.component';
import { HttpClient } from '@angular/common/http';

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
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  title = 'Sunset';
  location = 'Toulouse';
  data: any = null;

  fetchLocationData(): void {
    this.httpClient
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9a2af268c5ae45d59e7170512233007&q=${this.location} &days=3`
      )
      .subscribe((res: any) => {
        this.data = res;
      });
  }

  setInitialLocation(): void {
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

  ngOnInit(): void {
    this.setInitialLocation();
  }
}
