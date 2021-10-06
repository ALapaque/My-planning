import {Component, OnInit} from '@angular/core';
import {SectionCard} from '../../@shared/models/section-card.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-features-content',
  templateUrl: './features-content.component.html',
  styleUrls: ['./features-content.component.scss'],
})
export class FeaturesContentComponent implements OnInit {

  cards: Array<SectionCard> | undefined;

  constructor(
    private _translateService: TranslateService,
  ) {
    this._initCards();
  }

  ngOnInit(): void {
  }

  private async _initCards(): Promise<void> {
    await this._translateService.get('APPNAME').toPromise();
    this.cards = new Array<SectionCard>(
      new SectionCard(
        {
          title: this._translateService.instant('HOMEPAGE.SECTION.CARDS.AGENDA.TITLE'),
          description: this._translateService.instant('HOMEPAGE.SECTION.CARDS.AGENDA.DESCRIPTION'),
        },
      ),
      new SectionCard(
        {
          title: this._translateService.instant('HOMEPAGE.SECTION.CARDS.MEETING.TITLE'),
          description: this._translateService.instant('HOMEPAGE.SECTION.CARDS.MEETING.DESCRIPTION'),
        },
      ),
      new SectionCard(
        {
          title: this._translateService.instant('HOMEPAGE.SECTION.CARDS.OFFER.TITLE'),
          description: this._translateService.instant('HOMEPAGE.SECTION.CARDS.OFFER.DESCRIPTION'),
        },
      )
    );
  }
}
