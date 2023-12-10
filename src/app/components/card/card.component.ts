import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'card',
  templateUrl: `./card.component.html`,
})
export class Card {
  @Input() innerClass: string = '';
}
