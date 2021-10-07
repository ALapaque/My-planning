import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { SharedModule }       from '../../@shared/shared.module';
import { CardService } from '../@shared/services/card.service';
import { ApplicationModule } from '../application.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting }   from './dashboard.routing';
import { CardComponent } from './card/card.component';
import { RecapCardComponent } from './recap-card/recap-card.component';
import { EventCardContentComponent } from './card/event-card-content/event-card-content.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    RecapCardComponent,
    EventCardContentComponent,
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
