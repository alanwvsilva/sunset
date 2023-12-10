import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'theme-switcher',
  templateUrl: `./theme-switcher.component.html`,
})
export class ThemeSwitcher implements OnInit {
  isDarkTheme: boolean = localStorage.getItem('theme') === 'dark';

  updateTheme(e: Event) {
    const active = (e.target as HTMLInputElement).checked;
    console.log(active);
    this.isDarkTheme = active;
    localStorage.setItem('theme', active ? 'dark' : 'light');
    this.setDarkTheme(active);
  }

  setDarkTheme(active: boolean) {
    if (active) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'forest');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  ngOnInit() {
    this.setDarkTheme(this.isDarkTheme);
  }
}
