import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RadialProgress } from '../radial-progress/radial-progress.component';

@Component({
  selector: 'air-quality',
  standalone: true,
  imports: [DecimalPipe, RadialProgress],
  templateUrl: './air-quality.component.html',
})
export class AirQuality implements OnInit {
  @Input() data: any;
  value: number = 0;
  label: number = 0;
  colorClass: string | undefined;
  quality: string | undefined;

  setColorClass() {
    switch (this.label) {
      case 1:
        this.colorClass = 'text-green-500';
        this.quality = 'Bom';
        break;
      case 2:
        this.colorClass = 'text-cyan-500';
        this.quality = 'Moderado';
        break;
      case 3:
        this.colorClass = 'text-teal-500';
        this.quality = 'Insalubre para grupos sensíveis';
        break;
      case 4:
        this.colorClass = 'text-yellow-500';
        this.quality = 'Insalubre';
        break;
      case 5:
        this.colorClass = 'text-orange-500';
        this.quality = 'Muito Insalubre';
        break;
      case 6:
        this.colorClass = 'text-red-500';
        this.quality = 'Extremamente Insalubre';
        break;
    }
  }

  setInitialValues() {
    this.value = this.label * 16.6;
    this.label = this.data.current.air_quality['us-epa-index'];
    this.setColorClass();
  }

  ngOnChanges() {
    this.setInitialValues();
  }

  ngOnInit(): void {
    this.setInitialValues();
  }
}
