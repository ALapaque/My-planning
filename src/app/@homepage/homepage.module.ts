import { NgModule }               from '@angular/core';
import { NbThemeModule }          from '@nebular/theme';
import { SharedModule }           from '../@shared/shared.module';
import { SectionService }         from './@shared/services/section.service';
import { FooterComponent }        from './footer/footer.component';
import { HeaderAppNameComponent } from './header/header-app-name/header-app-name.component';
import { HeaderComponent }        from './header/header.component';
import { SectionComponent }       from './section/section.component';
import { HomepageComponent }      from './homepage.component';
import { HomepageRouting }        from './homepage.routing';
import { HeroBannerComponent }    from './hero-banner/hero-banner.component';
import { HeaderMenuComponent }    from './header/header-menu/header-menu.component';
import { HeaderGoToAppComponent } from './header/header-go-to-app/header-go-to-app.component';
import { AboutComponent }         from './section/about/about.component';

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
      AboutComponent,
    ],
    imports: [
      SharedModule,
      HomepageRouting,
    ],
    providers: [
      SectionService
    ]
  },
)
export class HomepageModule {}
