import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher.component';

@Component({
  standalone: true,
  selector: 'header',
  imports: [ThemeSwitcher],
  providers: [ApiService],
  templateUrl: `./header.component.html`,
})
export class Header {
  api = inject(ApiService);
  @Output() locationChange = new EventEmitter();
  searchData: any = [];
  isDropdownOpen = false;

  searchLocation(e: any) {
    const searchValue = e.target.value;

    this.api
      .request(`q=${searchValue}&lang=pt`, 'search')
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
