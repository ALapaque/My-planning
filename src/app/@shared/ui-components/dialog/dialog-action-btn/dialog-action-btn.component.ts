import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbStepperComponent} from '@nebular/theme';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dialog-action-btn',
  templateUrl: './dialog-action-btn.component.html',
  styleUrls: ['./dialog-action-btn.component.scss']
})
export class DialogActionBtnComponent implements OnInit {

  @Input() stepper: NbStepperComponent | undefined;
  @Input() form: FormGroup | undefined;
  @Input() hideRightButtons: boolean = false;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
