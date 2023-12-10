import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  standalone: true,
  selector: 'theme-switcher',
  templateUrl: `./theme-switcher.component.html`,
})
export class ThemeSwitcher {
  theme = inject(ThemeService);
}
