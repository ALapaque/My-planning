import { Component, Input, OnInit } from '@angular/core';
import { isSameDay } from 'date-fns';

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
    return isSameDay(new Date(this.startDate), new Date(this.endDate));
  }

}
