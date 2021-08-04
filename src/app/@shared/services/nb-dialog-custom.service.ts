import {Injectable} from '@angular/core';
import {NbDialogService} from '@nebular/theme';

@Injectable()
export class NbDialogCustomService {

  constructor(
    private _nbDialogService: NbDialogService,
  ) {
  }

  public get isFullscreen(): string  {
    return (window.innerWidth <= 960) ? 'nebular-dialog-fullscreen' : 'nebular-dialog' };
}
