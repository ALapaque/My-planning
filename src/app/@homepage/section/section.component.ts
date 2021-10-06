import { Component, Input, OnInit } from '@angular/core';
import { Section }                  from '../@shared/models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [ './section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section = new Section();
  @Input() even: boolean | undefined;
  @Input() odd: boolean | undefined;
  @Input() last: boolean | undefined;
  @Input() first: boolean | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
