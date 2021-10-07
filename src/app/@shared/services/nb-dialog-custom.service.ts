import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ResponsiveService } from './responsive.service';

@Injectable()
export class NbDialogCustomService {

  constructor(
    private _nbDialogService: NbDialogService,
    private _responsiveService: ResponsiveService,
  ) {
  }

  get isFullscreen(): string {
    return (this._responsiveService.isMobile) ? 'nebular-dialog-fullscreen' : 'nebular-dialog';
  }
}
