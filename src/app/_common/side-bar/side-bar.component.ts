import { Component, OnInit } from '@angular/core';
import { MenuData } from '../../menu-data';
import { MenuDataService } from './menu-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  menuData: MenuData[];

  constructor(
    private menuDataService: MenuDataService
  ) { }

  ngOnInit() {
    this.getMenuData();
  }

  getMenuData(): void {
    this.menuDataService.getMenuData()
      .subscribe(menuData => {
        return this.menuData = menuData;
      });
  }
}


