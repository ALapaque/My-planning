import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { AppComponent }                         from './app.component';
import { AppRouting }                           from './app.routing';
import { BrowserAnimationsModule }              from '@angular/platform-browser/animations';
import { AppRoutingModule }                     from './app-routing.module';

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports: [
              BrowserModule,
              AppRouting,
              BrowserAnimationsModule,
              AppRoutingModule,
            ],
            providers: [],
            bootstrap: [ AppComponent ],
          })
export class AppModule {}
