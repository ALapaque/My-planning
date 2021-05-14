import { Component, OnInit }   from '@angular/core';
import { AgendaHelperService } from '../../../agenda-helper.service';

@Component({
             selector: 'app-agenda-toolbar',
             templateUrl: './agenda-toolbar.component.html',
             styleUrls: [ './agenda-toolbar.component.scss' ],
           })
export class AgendaToolbarComponent implements OnInit {

  constructor(
    public agendaHelperService: AgendaHelperService,
  ) {
  }

  ngOnInit(): void {
  }
}
