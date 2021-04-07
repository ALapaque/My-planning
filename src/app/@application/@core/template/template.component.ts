import { Component, OnInit } from '@angular/core';
import { NbSidebarService }  from '@nebular/theme';

@Component({
             selector: 'app-template',
             templateUrl: './template.component.html',
             styleUrls: [ './template.component.scss' ],
           })
export class TemplateComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }

}
