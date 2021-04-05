import { NgModule }                           from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full',
  },
  {
    path: 'homepage' , loadChildren: () => import('./@homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'app', loadChildren: () => import('./@application/application.module').then((m) => m.ApplicationModule),
  },
];

@NgModule({
            imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled', })],
            exports: [ RouterModule ],
          })
export class AppRouting {}
