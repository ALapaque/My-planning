import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent implements OnInit {

  @Output() public close: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
