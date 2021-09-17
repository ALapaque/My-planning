import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RightMenuService {
  public expanded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}
