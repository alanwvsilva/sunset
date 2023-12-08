import { Component, Input } from '@angular/core';

@Component({
  selector: 'radial-progress',
  standalone: true,
  templateUrl: './radial-progress.component.html',
})
export class RadialProgress {
  @Input() value: number = 0;
  @Input() label: number = 0;
  @Input() indicator: string | undefined;
}
