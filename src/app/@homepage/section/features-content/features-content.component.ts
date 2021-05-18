import { Component, OnInit } from '@angular/core';
import { SectionCard }       from '../../@shared/models/section-card.model';

@Component({
  selector: 'app-features-content',
  templateUrl: './features-content.component.html',
  styleUrls: ['./features-content.component.scss']
})
export class FeaturesContentComponent implements OnInit {

  public cards: Array<SectionCard> = new Array<SectionCard>(
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
    new SectionCard(
      {
        img: './assets/homepage/sections/cards/section-card-calendar.jpg',
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>'
      }
    ),
  );

  constructor() { }

  ngOnInit(): void {
  }

}
