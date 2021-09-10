import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { NbSidebarState } from '@nebular/theme/components/sidebar/sidebar.component';
import { AuthService } from '../../../@shared/services/auth.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../../@shared/services/loader.service';
import { AgendaHelperService } from '../../agenda/@shared/services/agenda-helper.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [ './template.component.scss' ],
})
export class TemplateComponent implements OnInit, OnDestroy {
  public nbSidebarState: NbSidebarState = 'expanded';

  private _destroy: Subject<any> = new Subject<any>();

  constructor(
    public sidebarService: NbSidebarService,
    public loaderService: LoaderService,
    private _nbThemeService: NbThemeService,
    private _authService: AuthService,
    private _agendaHelperService: AgendaHelperService,
  ) {
  }

  ngOnInit(): void {
    this._initTheme();
  }

  ngOnDestroy(): void {
    this._destroy.next();
  }

  public toggle(): void {
    this.sidebarService.toggle(true, 'left');
  }

  public logout(): void {
    this._authService.logout();
    this._agendaHelperService.calendarsSelected = undefined;
  }

  private _initTheme() {
    this._nbThemeService.changeTheme(sessionStorage.getItem('theme') ?? 'default');
    sessionStorage.setItem('theme', this._nbThemeService.currentTheme);
  }
}
