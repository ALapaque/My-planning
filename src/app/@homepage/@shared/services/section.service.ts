import { Injectable }     from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay }          from 'rxjs/operators';
import { SECTIONS }       from '../mock-up/section.datasource';
import { Section }        from '../models/section.model';

@Injectable({
              providedIn: 'root',
            })
export class SectionService {

  private _sections: Array<Section> = SECTIONS;

  constructor() {
  }

  public getSections(): Observable<Array<Section>> {
    return of(this._sections).pipe(
      delay(250),
    );
  }
}
