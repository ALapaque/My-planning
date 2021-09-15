import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsContainerComponent } from './settings-container.component';
import { SettingsRouting } from './settings.routing';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { AgendaConfigurationComponent } from './agenda-configuration/agenda-configuration.component';
import { TeamConfigurationComponent } from './team-configuration/team-configuration.component';
import { SharedModule } from '../../@shared/shared.module';
import { UserCardComponent } from './user-configuration/user-card/user-card.component';


@NgModule({
  declarations: [
    SettingsContainerComponent,
    UserConfigurationComponent,
    AgendaConfigurationComponent,
    TeamConfigurationComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRouting,
  ],
})
export class SettingsModule {
}
