import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsContainerComponent } from './settings-container.component';
import { SettingsRouting } from './settings.routing';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { TeamConfigurationComponent } from './team-configuration/team-configuration.component';
import { SharedModule } from '../../@shared/shared.module';
import { UserCardComponent } from './user-configuration/user-card/user-card.component';
import { TeamCardComponent } from './team-configuration/team-card/team-card.component';


@NgModule({
  declarations: [
    SettingsContainerComponent,
    UserConfigurationComponent,
    TeamConfigurationComponent,
    UserCardComponent,
    TeamCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRouting,
  ],
})
export class SettingsModule {
}
