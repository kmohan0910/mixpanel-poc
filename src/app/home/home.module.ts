import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DevicesComponent } from './devices/devices.component';
import { OverviewComponent } from './overview/overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'devices',
        component: DevicesComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [OverviewComponent, DevicesComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
})
export class HomeModule {}
