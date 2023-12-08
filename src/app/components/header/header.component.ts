import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

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

  searchLocation(e: any) {
    const searchValue = e.target.value;

    this.httpClient
      .get(
        `https://api.weatherapi.com/v1/search.json?key=9a2af268c5ae45d59e7170512233007&q=${searchValue}`
      )
      .subscribe((res: any) => {
        this.searchData = res;
        this.isDropdownOpen = true;
      });
  }

  emitNewLocation(location: string) {
    this.locationChange.emit(location);
    this.isDropdownOpen = false;
  }
}
