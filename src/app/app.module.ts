import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SideBarComponent } from './_common/side-bar/side-bar.component';
import { TopNavbarComponent } from './_common/top-navbar/top-navbar.component';

import { NotFoundComponent } from './_common/not-found/not-found.component';

import { HomeComponent } from './home/home.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ManagementPanelComponent } from './management-panel/management-panel.component';

import { MenuDataService } from './_common/side-bar/menu-data.service';
import { AlertDataService } from './home/alert-data.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  declarations: [
    AppComponent,

    SideBarComponent,
    TopNavbarComponent,

    NotFoundComponent,

    HomeComponent,
    DigitalAccountComponent,
    ManagementPanelComponent
  ],

  providers: [
    MenuDataService,
    AlertDataService
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }


