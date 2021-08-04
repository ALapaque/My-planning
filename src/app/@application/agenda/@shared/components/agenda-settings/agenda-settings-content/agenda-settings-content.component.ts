import {Component, OnInit, ViewChild} from '@angular/core';
import {NbStepperComponent} from '@nebular/theme';
import {AgendaHelperService} from '../../../../agenda-helper.service';

@Component({
  selector: 'app-agenda-settings-content',
  templateUrl: './agenda-settings-content.component.html',
  styleUrls: ['./agenda-settings-content.component.scss']
})
export class AgendaSettingsContentComponent implements OnInit {

  @ViewChild('stepper') public nbStepper: NbStepperComponent;

  constructor(
    public agendaHelperService: AgendaHelperService
  ) { }

  ngOnInit(): void {
  }

}
