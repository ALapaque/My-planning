import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbStepperComponent} from '@nebular/theme';

@Component({
  selector: 'app-dialog-action-btn',
  templateUrl: './dialog-action-btn.component.html',
  styleUrls: ['./dialog-action-btn.component.scss']
})
export class DialogActionBtnComponent implements OnInit {

  @Input() public stepper: NbStepperComponent | undefined;
  @Output() public close: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
