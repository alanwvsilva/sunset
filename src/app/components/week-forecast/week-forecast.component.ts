import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'week-forecast',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
  templateUrl: './week-forecast.component.html',
})
export class WeekForecast {
  @Input() data: any = [];
}
