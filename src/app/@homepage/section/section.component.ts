import { Component, Input, OnInit } from '@angular/core';
import { Section }                  from '../@shared/models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [ './section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() public section: Section = new Section();
  @Input() public even: boolean | undefined;
  @Input() public odd: boolean | undefined;
  @Input() public last: boolean | undefined;
  @Input() public first: boolean | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
