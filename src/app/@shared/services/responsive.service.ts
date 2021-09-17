import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponsiveService {
  private needsMobileView: boolean = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
  ) {
    this._initBreakpointListener();
  }

  public get isMobile(): boolean {
    return (window.innerWidth < 960) ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      this.needsMobileView;
  }

  private _initBreakpointListener(): void {
    this._breakpointObserver
      .observe([ Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Tablet, Breakpoints.Handset ])
      .pipe(tap((state: BreakpointState) => this.needsMobileView = state.matches))
      .subscribe();
  }
}
