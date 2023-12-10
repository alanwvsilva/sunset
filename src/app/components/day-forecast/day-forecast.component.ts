import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RadialProgress } from '../radial-progress/radial-progress.component';
import { Card } from '../card/card.component';

@Component({
  selector: 'day-forecast',
  standalone: true,
  imports: [DecimalPipe, RadialProgress, Card],
  templateUrl: './day-forecast.component.html',
})
export class DayForecast {
  @Input() data: any = [];
  @Input() isAproxLocation: boolean = false;
}
