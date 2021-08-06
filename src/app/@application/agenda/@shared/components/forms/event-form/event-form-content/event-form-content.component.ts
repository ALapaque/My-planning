import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SchedulerEvent} from '../../../../models/scheduler-event.model';
import {FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {NbStepperComponent} from '@nebular/theme';

@Component({
  selector: 'app-event-form-content',
  templateUrl: './event-form-content.component.html',
  styleUrls: ['./event-form-content.component.scss']
})
export class EventFormContentComponent implements OnInit {
  @ViewChild('stepper') public nbStepper: NbStepperComponent;
  @Input() public event!: SchedulerEvent;
  @Input() public form!: FormGroup;

  constructor(
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
  }
}
