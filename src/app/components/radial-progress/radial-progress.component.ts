import { Component, Input } from '@angular/core';

@Component({
  selector: 'radial-progress',
  standalone: true,
  templateUrl: './radial-progress.component.html',
})
export class RadialProgress {
  @Input() value: number = 0;
  @Input() size: number = 112;
}
