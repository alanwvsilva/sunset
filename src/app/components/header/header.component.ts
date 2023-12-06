import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'header',
  templateUrl: `./header.component.html`,
})
export class Header {
  constructor(private httpClient: HttpClient) {}

  searchData: any = [];

  search(ev: any) {
    this.httpClient
      .get(
        `https://api.weatherapi.com/v1/search.json?key=9a2af268c5ae45d59e7170512233007&q=${ev.target.value}`
      )
      .subscribe((res: any) => {
        this.searchData = res;
        console.log(this.searchData);
      });
  }
}
