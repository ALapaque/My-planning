import {Component, Inject, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  constructor(
    public dialogRef: NbDialogRef<EventFormComponent>
  ) { }

  ngOnInit(): void {
  }

}
