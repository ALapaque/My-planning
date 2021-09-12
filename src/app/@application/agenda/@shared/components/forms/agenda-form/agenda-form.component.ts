import {Component, OnInit} from '@angular/core';
import {SchedulerEvent} from '../../../models/scheduler-event.model';
import {Agenda} from '../../../../../../@shared/models/agenda.model';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss']
})
export class AgendaFormComponent implements OnInit {
  public agenda: Agenda = new Agenda();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.agenda);
  }

}
