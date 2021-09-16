import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaModule } from '../agenda/agenda.module';
import { UserDetailsComponent } from './@shared/components/user-details/user-details.component';
import { SettingsContainerComponent } from './settings-container.component';
import { SettingsRouting } from './settings.routing';
import { UserConfigurationComponent } from './user-configuration/user-configuration.component';
import { TeamConfigurationComponent } from './team-configuration/team-configuration.component';
import { SharedModule } from '../../@shared/shared.module';
import { UserCardComponent } from './user-configuration/user-card/user-card.component';
import { TeamCardComponent } from './team-configuration/team-card/team-card.component';
import { TeamDetailsComponent } from './@shared/components/team-details/team-details.component';
import { UserFormComponent } from './@shared/components/form/user-form/user-form.component';
import { TeamFormComponent } from './@shared/components/form/team-form/team-form.component';
import { UserFormContentComponent } from './@shared/components/form/user-form/user-form-content/user-form-content.component';
import { TeamFormContentComponent } from './@shared/components/form/team-form/team-form-content/team-form-content.component';

@NgModule({
  declarations: [
    SettingsContainerComponent,
    UserConfigurationComponent,
    TeamConfigurationComponent,
    UserCardComponent,
    TeamCardComponent,
    UserDetailsComponent,
    TeamDetailsComponent,
    UserFormComponent,
    TeamFormComponent,
    UserFormContentComponent,
    TeamFormContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRouting,
    AgendaModule,
  ],
})
export class SettingsModule {
}
