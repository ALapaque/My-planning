import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsContainerComponent} from './settings-container.component';
import {UserConfigurationComponent} from './user-configuration/user-configuration.component';
import {AgendaConfigurationComponent} from './agenda-configuration/agenda-configuration.component';
import {TeamConfigurationComponent} from './team-configuration/team-configuration.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'users'
      },
      {
        path: 'users',
        component: UserConfigurationComponent,
        pathMatch: 'full',
      },
      {
        path: 'agendas',
        component: AgendaConfigurationComponent,
        pathMatch: 'full',
      },
      {
        path: 'teams',
        component: TeamConfigurationComponent,
        pathMatch: 'full',
      }
    ]
  },
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  },
)
export class SettingsRouting {
}
