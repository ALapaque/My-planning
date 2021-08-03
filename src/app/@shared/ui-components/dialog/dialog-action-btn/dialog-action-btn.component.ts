import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-action-btn',
  templateUrl: './dialog-action-btn.component.html',
  styleUrls: ['./dialog-action-btn.component.scss']
})
export class DialogActionBtnComponent implements OnInit {

  @Output() public close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
