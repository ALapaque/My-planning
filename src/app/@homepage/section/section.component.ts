import { Component, Input, OnInit } from '@angular/core';
import { Section }                  from '../@shared/models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [ './section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() public section: Section = new Section();

  constructor() { }

  ngOnInit(): void {
  }

}
