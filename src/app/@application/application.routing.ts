import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent }    from './@core/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'agenda',
        loadChildren: () => import('./agenda/agenda.module').then((m) => m.AgendaModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule(
  {
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
  },
)
export class ApplicationRouting {}
