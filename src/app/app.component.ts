import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { Forecast } from './components/forecast/forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, Header, Forecast],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Sunset';
}
