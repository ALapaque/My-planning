import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { SettingsContainerComponent } from './settings-container.component';
import {SettingsRouting} from './settings.routing';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { AgendaConfigurationComponent } from './agenda-configuration/agenda-configuration.component';
import { TeamConfigurationComponent } from './team-configuration/team-configuration.component';
import { UserConfigurationToolbarComponent } from './user-configuration/user-configuration-toolbar/user-configuration-toolbar.component';
import {SharedModule} from '../../@shared/shared.module';



@NgModule({
  declarations: [
    SettingsContainerComponent,
    UserConfigurationComponent,
    AgendaConfigurationComponent,
    TeamConfigurationComponent,
    UserConfigurationToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRouting
  ]
})
export class SettingsModule { }
