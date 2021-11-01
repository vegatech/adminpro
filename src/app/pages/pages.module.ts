import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProgressComponent,

    DashboardComponent,
    Graficas1Component,
    PagesComponent,
  ],
  exports: [
    ProgressComponent,

    DashboardComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class PagesModule { }
