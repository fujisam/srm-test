import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { AlertData } from '../alert-data';

@Injectable()

export class AlertDataService {
  private alertDataUrl = 'api/alertData'; // URL to web api
  constructor(private http: HttpClient) { }

  getAlertData(): Observable<AlertData[]> {
    return this.http.get<AlertData[]>(this.alertDataUrl);
  }
}


