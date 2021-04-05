import { NgModule }                           from '@angular/core';
import { ExtraOptions, RouterModule, Routes }                                                                    from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full',
  },
  {
    path: 'homepage' , loadChildren: () => import('./@homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'auth' , loadChildren: () => import('./@auth/auth.module').then((m) => m.AuthModule),
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