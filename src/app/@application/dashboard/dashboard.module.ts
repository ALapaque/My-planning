import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SharedModule }       from '../../@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting }   from './dashboard.routing';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
  ]
})
export class DashboardModule { }
