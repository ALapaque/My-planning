import { Component, OnInit } from '@angular/core';
import { NbSidebarService }  from '@nebular/theme';
import { NbSidebarState }    from '@nebular/theme/components/sidebar/sidebar.component';

@Component({
             selector: 'app-template',
             templateUrl: './template.component.html',
             styleUrls: [ './template.component.scss' ],
           })
export class TemplateComponent implements OnInit {

  public sideBarState: NbSidebarState | undefined;

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

}
