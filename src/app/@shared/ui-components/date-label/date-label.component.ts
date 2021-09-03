import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';;

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.scss']
})
export class DateLabelComponent implements OnInit {
  @Input() startDate!: string;
  @Input() endDate!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public isSameDay(): boolean {
    return moment(this.startDate).isSame(this.endDate, 'day');
  }

}
