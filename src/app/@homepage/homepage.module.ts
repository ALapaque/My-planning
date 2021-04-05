import { NgModule }               from '@angular/core';
import { NbThemeModule }          from '@nebular/theme';
import { SharedModule }           from '../@shared/shared.module';
import { HeaderAppNameComponent } from './components/header/header-app-name/header-app-name.component';
import { HeaderComponent }        from './components/header/header.component';
import { FooterComponent }        from './components/footer/footer.component';
import { SectionComponent }       from './components/section/section.component';
import { HomepageComponent }      from './homepage.component';
import { HomepageRouting }        from './homepage.routing';
import { HeroBannerComponent }    from './components/hero-banner/hero-banner.component';
import { HeaderMenuComponent }    from './components/header/header-menu/header-menu.component';
import { HeaderGoToAppComponent } from './components/header/header-go-to-app/header-go-to-app.component';

@NgModule(
  {
    declarations: [
      HeaderComponent,
      FooterComponent,
      SectionComponent,
      HomepageComponent,
      HeroBannerComponent,
      HeaderAppNameComponent,
      HeaderMenuComponent,
      HeaderGoToAppComponent,
    ],
    imports: [
      SharedModule,
      HomepageRouting,
      NbThemeModule.forRoot(),
    ],
  },
)
export class HomepageModule {}
