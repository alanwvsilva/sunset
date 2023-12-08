import { Component, Input } from '@angular/core';

@Component({
  selector: 'day-forecast',
  standalone: true,
  imports: [],
  templateUrl: './day-forecast.component.html',
})
export class DayForecast {
  @Input() data: any = [];
}
