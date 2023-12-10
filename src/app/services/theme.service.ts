import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkThemeActive: boolean = localStorage.getItem('theme') === 'dark';

  handleThemeChange(e: Event) {
    this.isDarkThemeActive = (e.target as HTMLInputElement).checked;
    localStorage.setItem('theme', this.isDarkThemeActive ? 'dark' : 'light');
    this.setTheme();
  }

  setTheme() {
    this.isDarkThemeActive
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');

    document.documentElement.setAttribute(
      'data-theme',
      this.isDarkThemeActive ? 'forest' : 'light'
    );
  }
}
