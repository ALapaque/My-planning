import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from './@shared/models/section.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  public sections: Array<Section> | undefined;
  public scrollYPosition: number = 0;

  @ViewChild('nbLayoutHeaderComponent') public nbLayoutHeaderComponent: ElementRef | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _translateService: TranslateService,
  ) {
    this._initSections();
  }

  public ngOnInit(): void {
    this._router.navigate([''], {fragment: 'home'});
  }

  public get displayScrollToTop(): boolean {
    return !!this.scrollYPosition;
  }

  @HostListener('window:scroll', ['$event']) onScroll(e: any): void {
    this.scrollYPosition = e.srcElement.scrollingElement.scrollTop;
  }

  private async _initSections() {
    await this._translateService.get('APPNAME').toPromise();
    this.sections = new Array<Section>(
      new Section(
        {
          id: 1,
          title: 'Time management',
          anchor: '',
        },
      ),
    );
  }
}
