import {Component, HostListener} from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from '@angular/service-worker';
import {NbDialogService} from '@nebular/theme';
import {slideInAnimation} from './@shared/animation/routing.animation';
import {
  ConfirmDialogComponent,
  ConfirmDialogResult,
} from './@shared/ui-components/confirm-dialog/confirm-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {Locale, SessionService} from './@shared/services/session.service';

@Component(
  {
    selector: 'app-root',
    template: `
      <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData.animation">
        <router-outlet #o="outlet"></router-outlet>
      </div>
    `,
    animations: [slideInAnimation],
  },
)
export class AppComponent {

  constructor(
    private _nbDialogService: NbDialogService,
    private _swUpdateService: SwUpdate,
    private _sessionService: SessionService,

  ) {
    this._checkForUpdates();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const width: number = event.target.innerWidth;
    const dialog: HTMLCollection = document.getElementsByClassName('cdk-overlay-pane');

    if (!dialog) return;
    else if (width <= 960) {
      dialog[0].classList.replace('nebular-dialog', 'nebular-dialog-fullscreen');
    } else {
      dialog[0].classList.replace('nebular-dialog-fullscreen', 'nebular-dialog');
    }
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
