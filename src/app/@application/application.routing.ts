import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateComponent} from './@core/template/template.component';
import {AdminGuard} from '../@shared/guards/admin.guard';
import {AuthenticatedGuard} from '../@shared/guards/authenticated.guard';

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
        canActivate: [AuthenticatedGuard],
        canActivateChild: [AuthenticatedGuard],
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'agenda',
        canActivate: [AuthenticatedGuard],
        canActivateChild: [AuthenticatedGuard],
        loadChildren: () => import('./agenda/agenda.module').then((m) => m.AgendaModule),
      },
      {
        path: 'configuration',
        canActivate: [AuthenticatedGuard, AdminGuard],
        canActivateChild: [AuthenticatedGuard, AdminGuard],
        loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  },
)
export class ApplicationRouting {
}
