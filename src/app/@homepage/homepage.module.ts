import { NgModule }               from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { NebularModule } from '../@shared/nebular.module';
import { SharedModule }           from '../@shared/shared.module';
import { HeaderAppNameComponent } from './header/header-app-name/header-app-name.component';
import { HeaderGoToAppComponent } from './header/header-go-to-app/header-go-to-app.component';
import { HeaderMenuComponent }    from './header/header-menu/header-menu.component';
import { HeaderComponent }        from './header/header.component';
import { HeroBannerComponent }    from './hero-banner/hero-banner.component';
import { HomepageComponent }      from './homepage.component';
import { HomepageRouting }        from './homepage.routing';
import { SectionComponent }       from './section/section.component';
import { FeaturesContentComponent } from './section/features-content/features-content.component';
import { FeaturesCardComponent } from './section/features-content/features-card/features-card.component';

@NgModule(
  {
    declarations: [
      HeaderComponent,
      SectionComponent,
      HomepageComponent,
      HeroBannerComponent,
      HeaderAppNameComponent,
      HeaderMenuComponent,
      HeaderGoToAppComponent,
      FeaturesContentComponent,
      FeaturesCardComponent,
    ],
    imports: [
      SharedModule,
      HomepageRouting,
    ],
  },
)
export class HomepageModule {}
