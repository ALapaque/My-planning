import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NbSidebarComponent, NbSidebarResponsiveState, NbSidebarService, NbThemeService} from '@nebular/theme';
import {NbSidebarState} from '@nebular/theme/components/sidebar/sidebar.component';
import {filter, takeUntil, tap} from 'rxjs/operators';
import {AuthService} from '../../../@shared/services/auth.service';
import {Subject} from 'rxjs';
import {LoaderService} from '../../@shared/services/loader.service';
import {RightMenuService} from '../../@shared/services/right-menu.service';
import {AgendaHelperService} from '../../agenda/@shared/services/agenda-helper.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rightSideBar') rightSidebar: NbSidebarComponent;
  public nbLeftSidebarState: NbSidebarState = 'expanded';

  private _destroy$: Subject<any> = new Subject<any>();

  constructor(
    public rightMenuService: RightMenuService,
    public nbSidebarService: NbSidebarService,
    public loaderService: LoaderService,
    private _nbThemeService: NbThemeService,
    private _authService: AuthService,
    private _agendaHelperService: AgendaHelperService,
  ) {
  }

  ngOnInit(): void {
    this._initTheme();
  }

  ngAfterViewInit(): void {
    this.rightSidebar.collapse();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  /**
   * toggle the left menu
   */
  public toggle(): void {
    this.nbSidebarService.toggle(true, 'left');
  }

  public logout(): void {
    this._authService.logout();
    this._agendaHelperService.calendarsSelected = undefined;
  }

  public responsiveStateChange($event: NbSidebarResponsiveState): void {
    console.log($event);
    this.rightSidebar.collapse();
    this.rightMenuService.expanded$.next(false);
  }

  private _initTheme(): void {
    this._nbThemeService.changeTheme(sessionStorage.getItem('theme') ?? 'default');
    sessionStorage.setItem('theme', this._nbThemeService.currentTheme);
  }
}
