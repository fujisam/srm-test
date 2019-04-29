import { Component, OnInit } from '@angular/core';
import { AlertData } from '../alert-data';
import { AlertDataService } from './alert-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alertData: AlertData[];

  constructor(
    private alertDataService: AlertDataService
  ) { }

  ngOnInit() {
    this.getAlertData();
  }

  getAlertData(): void {
    this.alertDataService.getAlertData()
      .subscribe(alertData => {
        return this.alertData = alertData;
      });
  }
}


