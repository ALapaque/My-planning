import { Injectable }     from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay }          from 'rxjs/operators';
import { Section }        from '../models/section.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
              providedIn: 'root',
            })
export class SectionService {

  private _sections: Array<Section> | undefined;

  constructor(
    private _translateService: TranslateService,
  ) {
    this._sections  = new Array<Section>(
      new Section(
        {
          id: 1,
          title: 'Time management',
          anchor: '',
        },
      ),
      new Section(
        {
          id: 2,
          title: this._translateService.instant('HOMEPAGE.SECTION.FUNCTIONNALITIES'),
          anchor: 'features',
        },
      ),
      new Section(
        {
          id: 3,
          title: this._translateService.instant('HOMEPAGE.SECTION.SECTORS'),
          anchor: 'sectors',
        },
      ),
      new Section(
        {
          id: 4,
          title: this._translateService.instant('HOMEPAGE.SECTION.OFFERS'),
          anchor: 'offers',
        },
      ),
      new Section(
        {
          id: 5,
          title: this._translateService.instant('HOMEPAGE.SECTION.CLIENTS'),
          anchor: 'clients',
        },
      ),
      new Section(
        {
          id: 6,
          title: this._translateService.instant('HOMEPAGE.SECTION.ABOUT'),
          anchor: 'about',
        },
      ),
    );
  }

  public getSections(): Observable<Array<Section> | undefined> {
    return of(this._sections).pipe(
      delay(250),
    );
  }
}
