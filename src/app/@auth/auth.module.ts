import { HttpClientModule }                     from '@angular/common/http';
import { NgModule }                             from '@angular/core';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbThemeModule }                        from '@nebular/theme';
import { SharedModule }                         from '../@shared/shared.module';
import { AuthRouting }                          from './auth.routing';
import { AuthComponent }                        from './auth.component';
import { LoginComponent }                       from './login/login.component';
import { RegisterComponent }                    from './register/register.component';
import { ResetPasswordComponent }               from './reset-password/reset-password.component';

@NgModule({
            declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
            imports: [
              SharedModule,
              AuthRouting,
              HttpClientModule,
              NbThemeModule.forRoot({name: 'corporate'}),
              NbAuthModule.forRoot(
                {
                  strategies: [
                    NbPasswordAuthStrategy.setup(
                      {
                        name: 'email',
                      },
                    ),
                  ],
                  forms: {},
                },
              ),
            ],
          })
export class AuthModule {}
