import { Component, Input, OnInit } from '@angular/core';
import { NbComponentSize } from '@nebular/theme';
import { Card } from '../../../@shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  constructor() {
  }

  ngOnInit(): void {
  }

  get cardSize(): NbComponentSize {
    return this.card.size.toLowerCase() as NbComponentSize;
  }
}
