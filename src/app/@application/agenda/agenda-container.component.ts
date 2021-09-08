import { Component, OnInit } from '@angular/core';
import {NbSidebarState} from '@nebular/theme/components/sidebar/sidebar.component';

@Component({
             selector: 'app-agenda-container',
             templateUrl: './agenda-container.component.html',
             styleUrls: [ './agenda-container.component.scss' ],
           })
export class AgendaContainerComponent implements OnInit {
  nbSidebarState: NbSidebarState = 'collapsed';

  constructor() {
  }

  ngOnInit(): void {
  }

}
