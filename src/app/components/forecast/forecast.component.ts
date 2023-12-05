import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  standalone: true,
  selector: 'forecast',
  templateUrl: `./forecast.component.html`,
})
export class Forecast {
  async getForecast() {
    await axios
      .get('http://api.weatherapi.com/v1/current.json ', {
        params: {
          key: '9a2af268c5ae45d59e7170512233007',
          q: 'London',
          days: '3',
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }
}
