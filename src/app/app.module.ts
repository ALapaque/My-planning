import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import localeFrBeExtra from '@angular/common/locales/extra/fr-BE';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { NbThemeModule } from '@nebular/theme';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './@shared/interceptors/error.interceptor';
import { JwtInterceptor } from './@shared/interceptors/jwt.interceptor';
import { ResponsiveService } from './@shared/services/responsive.service';
import { SharedModule } from './@shared/shared.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SessionService } from './@shared/services/session.service';

registerLocaleData(localeFr, 'fr-BE', localeFrBeExtra);
registerLocaleData(localeEn, 'en-US');

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
          return sessionStorage.getItem('jwt_token');
        },
      },
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 2500,
      tapToDismiss: true,
      closeButton: true,
      autoDismiss: false,
      maxOpened: 3,
      progressAnimation: 'decreasing',
      progressBar: true,
      preventDuplicates: true,
      newestOnTop: true,
      resetTimeoutOnDuplicate: true,
      disableTimeOut: false,
      easeTime: 300,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      },
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [ SessionService ],
      useFactory: (sessionService: SessionService) => sessionService.locale
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    ResponsiveService
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
