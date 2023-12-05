import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'forecast',
  templateUrl: './forecast.component.html',
})
export class Forecast implements OnInit {
  data: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.httpClient
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=9a2af268c5ae45d59e7170512233007&q=toulouse&days=7`
      )
      .subscribe((res: any) => {
        this.data = res;
      });
  }
}
