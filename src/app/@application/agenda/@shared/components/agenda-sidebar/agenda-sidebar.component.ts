import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-agenda-sidebar',
  templateUrl: './agenda-sidebar.component.html',
  styleUrls: ['./agenda-sidebar.component.scss']
})
export class AgendaSidebarComponent implements OnInit {

  constructor(
    public nbSidebarService: NbSidebarService,
  ) { }

  ngOnInit(): void {
  }

}
