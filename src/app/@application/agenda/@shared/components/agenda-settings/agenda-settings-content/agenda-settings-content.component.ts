import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NbStepperComponent} from '@nebular/theme';
import {AgendaHelperService} from '../../../services/agenda-helper.service';
import {FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-agenda-settings-content',
  templateUrl: './agenda-settings-content.component.html',
  styleUrls: ['./agenda-settings-content.component.scss']
})
export class AgendaSettingsContentComponent implements OnInit {

  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @Input() public form!: FormGroup;
  date: Date = new Date();

  constructor(
    public agendaHelperService: AgendaHelperService,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
  }
}
