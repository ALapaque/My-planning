import { Component, OnInit } from '@angular/core';
import { SectionCard }       from '../../@shared/models/section-card.model';

@Component({
             selector: 'app-features-content',
             templateUrl: './features-content.component.html',
             styleUrls: [ './features-content.component.scss' ],
           })
export class FeaturesContentComponent implements OnInit {

  public cards: Array<SectionCard> = new Array<SectionCard>(
    new SectionCard(
      {
        title: 'L\'agenda',
        description: `<p>Retrouvez un agenda complet avec la possibilité d\'afficher vos événements dans différentes vues soit d\'un type timeline ou bien standard</p>`,
      },
    ),
    new SectionCard(
      {
        title: 'Réunions',
        description: `Suivez vos réunions en direct grace à l'encodage de vos rapport directement sur vos événements`,
      },
    ),
    new SectionCard(
      {
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>',
      },
    ),
    new SectionCard(
      {
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>',
      },
    ),
    new SectionCard(
      {
        title: 'L\'agenda',
        description: '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '</ul>',
      },
    ),
  );

  constructor() {
  }

  ngOnInit(): void {
  }

}
