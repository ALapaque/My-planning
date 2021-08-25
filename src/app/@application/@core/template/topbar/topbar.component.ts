import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { NbSidebarComponent} from '@nebular/theme';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: [ './topbar.component.scss' ]
})
export class TopbarComponent implements OnInit {
  @Input() nbSidebarComponent: NbSidebarComponent;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
