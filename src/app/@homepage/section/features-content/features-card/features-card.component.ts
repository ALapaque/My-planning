import { Component, Input, OnInit } from '@angular/core';
import { SectionCard }              from '../../../@shared/models/section-card.model';

@Component({
  selector: 'app-features-card',
  templateUrl: './features-card.component.html',
  styleUrls: ['./features-card.component.scss']
})
export class FeaturesCardComponent implements OnInit {

  @Input() card: SectionCard | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
