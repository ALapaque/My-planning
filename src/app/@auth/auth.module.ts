import { NgModule }                from '@angular/core';
import { NbThemeModule }           from '@nebular/theme';
import { SharedModule }            from '../@shared/shared.module';
import { AuthRouting }             from './auth.routing';
import { AuthComponent }           from './auth.component';
import { LoginComponent }          from './login/login.component';
import { RegisterComponent }       from './register/register.component';
import { ResetPasswordComponent }  from './reset-password/reset-password.component';

@NgModule(
  {
    declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
      ResetPasswordComponent,
    ],
    imports: [
      SharedModule,
      AuthRouting,
    ],
  },
)
export class AuthModule {}
