import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from './@shared/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full',
  },
  {
    path: 'homepage',
    data: {animation: 'homepage'},
    loadChildren: () => import('./@homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'auth',
    data: {animation: 'auth'},
    loadChildren: () => import('./@auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    data: {animation: 'app'},
    canActivate: [AuthenticatedGuard],
    loadChildren: () => import('./@application/application.module').then((m) => m.ApplicationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    },
  )],
  exports: [RouterModule],
})
export class AppRouting {
}
