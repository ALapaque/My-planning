import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbStepperComponent} from '@nebular/theme';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dialog-action-btn',
  templateUrl: './dialog-action-btn.component.html',
  styleUrls: ['./dialog-action-btn.component.scss']
})
export class DialogActionBtnComponent implements OnInit {

  @Input() public stepper: NbStepperComponent | undefined;
  @Input() public form: FormGroup | undefined;
  @Output() public close: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
