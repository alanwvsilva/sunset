import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'theme-switcher',
  templateUrl: `./theme-switcher.component.html`,
})
export class ThemeSwitcher {
  toggleDarkTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
