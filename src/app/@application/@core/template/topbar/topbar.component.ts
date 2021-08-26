import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { NbSidebarComponent, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [ './topbar.component.scss' ]
})
export class TopbarComponent implements OnInit {
  @Input() nbSidebarComponent: NbSidebarComponent;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _nbThemeService: NbThemeService
  ) {
  }

  ngOnInit(): void {
  }

  get isDarkTheme(): boolean {
    return this._nbThemeService.currentTheme === 'cosmic';
  }

  public toggleTheme(): void {
    const currentTheme: string = this._nbThemeService.currentTheme;

    if (currentTheme === 'cosmic') {
      this._nbThemeService.changeTheme('default');
    } else {
      this._nbThemeService.changeTheme('cosmic');
    }
  }
}
