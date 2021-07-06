import { registerLocaleData }      from '@angular/common';
import { HttpClientModule }        from '@angular/common/http';
import localeEn                    from '@angular/common/locales/en';
import localeFrBeExtra             from '@angular/common/locales/extra/fr-BE';
import localeFr                    from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule }     from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule }               from '@auth0/angular-jwt';
import { NbThemeModule }           from '@nebular/theme';
import { ToastrModule }            from 'ngx-toastr';
import { SharedModule }            from './@shared/shared.module';
import { AppComponent }            from './app.component';
import { AppRouting }              from './app.routing';
import { ServiceWorkerModule }     from '@angular/service-worker';
import { environment }             from '../environments/environment';

registerLocaleData(localeFr, 'fr-BE', localeFrBeExtra);
registerLocaleData(localeEn, 'en-US');

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports: [
              SharedModule,
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
              ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
              }),
            ],
            providers: [
              { provide: LOCALE_ID, useValue: 'fr-BE' },
            ],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
