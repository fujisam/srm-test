import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DigitalAccountComponent } from './digital-account/digital-account.component';
import { ManagementPanelComponent } from './management-panel/management-panel.component';

import { NotFoundComponent } from './_common/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'digital-account', component: DigitalAccountComponent },
  { path: 'management-panel', component: ManagementPanelComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


