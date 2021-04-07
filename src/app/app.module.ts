import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { JwtModule }               from '@auth0/angular-jwt';
import { NbThemeModule }           from '@nebular/theme';
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
            ],
            providers: [],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
