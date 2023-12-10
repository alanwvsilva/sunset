import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient = inject(HttpClient);

  request(query: string, endpoint: 'forecast' | 'search' | 'ip' = 'forecast') {
    return this.httpClient.get(
      `https://api.weatherapi.com/v1/${endpoint}.json?key=${environment.weatherApiKey}&${query}`
    );
  }
}
