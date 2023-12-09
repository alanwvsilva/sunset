import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RadialProgress } from '../radial-progress/radial-progress.component';

@Component({
  selector: 'day-forecast',
  standalone: true,
  imports: [DecimalPipe, RadialProgress],
  templateUrl: './day-forecast.component.html',
})
export class DayForecast {
  @Input() data: any = [];
  @Input() isAproxLocation: boolean = false;
}
