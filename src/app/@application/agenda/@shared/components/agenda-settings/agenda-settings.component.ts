import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-agenda-settings',
  templateUrl: './agenda-settings.component.html',
  styleUrls: ['./agenda-settings.component.scss']
})
export class AgendaSettingsComponent implements OnInit {

  constructor(
    public dialogRef: NbDialogRef<AgendaSettingsComponent>
  ) { }

  ngOnInit(): void {
  }

}
