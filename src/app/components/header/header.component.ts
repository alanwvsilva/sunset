import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { environment } from '../../../environment/environment';

@Component({
  standalone: true,
  selector: 'header',
  templateUrl: `./header.component.html`,
})
export class Header {
  httpClient = inject(HttpClient);
  @Output() locationChange = new EventEmitter();
  searchData: any = [];
  isDropdownOpen = false;

  /* TODO: Move this function to a service */
  apiRequest(query: string, endpoint: string = 'forecast.json') {
    return this.httpClient.get(
      `https://api.weatherapi.com/v1/${endpoint}?key=${environment.weatherApiKey}&${query}`
    );
  }

  searchLocation(e: any) {
    const searchValue = e.target.value;

    this.apiRequest(`q=${searchValue}&lang=pt`, 'search.json').subscribe(
      (res: any) => {
        this.searchData = res;
        this.isDropdownOpen = true;
      }
    );
  }

  emitNewLocation(location: string) {
    this.locationChange.emit(location);
    this.isDropdownOpen = false;
  }
}
