import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AuthComponent }          from './auth.component';
import { LoginComponent }         from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
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
export class AuthRouting {}
