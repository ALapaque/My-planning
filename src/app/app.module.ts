import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { JwtModule }               from '@auth0/angular-jwt';
import { NbThemeModule }           from '@nebular/theme';
import { ToastrModule }            from 'ngx-toastr';
import { AppComponent }            from './app.component';
import { AppRouting }              from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports: [
              BrowserModule,
              AppRouting,
              BrowserAnimationsModule,
              HttpClientModule,
              NbThemeModule.forRoot({ name: 'default' }),
              JwtModule.forRoot({
                                  config: {
                                    tokenGetter: () => {
                                      return localStorage.getItem('jwt_token');
                                    },
                                    allowedDomains: [ 'example.com' ],
                                  },
                                }),
              ToastrModule.forRoot({
                                     positionClass: 'toast-bottom-left',
                                     timeOut: 5000,
                                     tapToDismiss: true,
                                     closeButton: true,
                                     preventDuplicates: true,
                                     newestOnTop: true,
                                     resetTimeoutOnDuplicate: true,
                                     disableTimeOut: false,
                                     easeTime: 300,
                                   }),
            ],
            providers: [],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
