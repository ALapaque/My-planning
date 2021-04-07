import { Component }                    from '@angular/core';
import { slideInAnimation }             from './@shared/routing.animation';

@Component(
  {
    selector: 'app-root',
    template: `
      <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData.animation">
        <router-outlet #o="outlet"></router-outlet>
      </div>
    `,
    styleUrls: [ './app.component.scss' ],
    animations: [ slideInAnimation ],
  },
)
export class AppComponent {
  title = 'TFE';
}
