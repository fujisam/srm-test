import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { MenuData } from '../../menu-data';

@Injectable()

export class MenuDataService {
  private menuDataUrl = 'api/menuData'; // URL to web api
  constructor(private http: HttpClient) { }

  getMenuData(): Observable<MenuData[]> {
    return this.http.get<MenuData[]>(this.menuDataUrl);
  }
}


