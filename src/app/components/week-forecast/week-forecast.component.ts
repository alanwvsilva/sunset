import { Component, Input } from '@angular/core';

@Component({
  selector: 'week-forecast',
  standalone: true,
  imports: [],
  templateUrl: './week-forecast.component.html',
})
export class WeekForecast {
  @Input() data: any = [];
}
