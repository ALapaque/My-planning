import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RightMenuService {
  expanded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
