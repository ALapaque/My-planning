import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SharedModule }       from '../../@shared/shared.module';
import { CardService } from '../@shared/services/card.service';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting }   from './dashboard.routing';
import { CardComponent } from './card/card.component';
import { RecapCardComponent } from './recap-card/recap-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    RecapCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
  ],
  providers: [
    CardService
  ]
})
export class DashboardModule { }
