import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { NbSidebarState } from '@nebular/theme/components/sidebar/sidebar.component';
import { AuthService } from '../../../@shared/services/auth.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../../@shared/services/loader.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.scss' ],
})
export class TemplateComponent implements AfterViewInit, OnDestroy {

  public nbSidebarState: NbSidebarState = 'expanded';

  private _destroy: Subject<any> = new Subject<any>();

  constructor(
    public sidebarService: NbSidebarService,
    public loaderService: LoaderService,
    private _nbThemeService: NbThemeService,
    private _authService: AuthService,
  ) {
  }

  ngAfterViewInit() {
    this._nbThemeService.changeTheme('cosmic');
  }

  ngOnDestroy(): void {
    this._destroy.next();
  }

  public toggle(): void {
    this.sidebarService.toggle(true, 'left');
  }

  public logout(): void {
    this._authService.logout();
  }
}
