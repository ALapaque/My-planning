import {Component} from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from '@angular/service-worker';
import {NbDialogService} from '@nebular/theme';
import {slideInAnimation} from './@shared/animation/routing.animation';
import {
  ConfirmDialogComponent,
  ConfirmDialogResult,
} from './@shared/ui-components/confirm-dialog/confirm-dialog.component';
import {TranslateService} from '@ngx-translate/core';

@Component(
  {
    selector: 'app-root',
    template: `
      <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData.animation">
        <router-outlet #o="outlet"></router-outlet>
      </div>
    `,
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation],
  },
)
export class AppComponent {

  constructor(
    private _nbDialogService: NbDialogService,
    private _swUpdateService: SwUpdate,
    private _translateService: TranslateService
  ) {
    this._checkForUpdates();
    _translateService.addLangs(['en', 'fr']);
    _translateService.setDefaultLang('fr');

    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/fr|fr-FR/) ? 'fr' : 'en');
  }

  /**
   * check if an update is available
   * @private
   */
  private _checkForUpdates(): void {
    this._swUpdateService
      .available
      .subscribe(
        (version: UpdateAvailableEvent) => {
          if (version) {
            this._swUpdateService
              .activateUpdate()
              .then(() => {
                this._nbDialogService
                  .open(ConfirmDialogComponent)
                  .onClose
                  .subscribe(
                    (result: ConfirmDialogResult) => {
                      if (!result) return;
                      else if (result.confirmed) document.location.reload();
                    }
                  );
              });
          }
        },
      );
  }

}
