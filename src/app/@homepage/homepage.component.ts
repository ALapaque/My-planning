import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router }                                 from '@angular/router';
import { BehaviorSubject, Observable }                            from 'rxjs';
import { Section }                                                from './@shared/models/section.model';
import { SectionService }                                         from './@shared/services/section.service';

@Component({
             selector: 'app-homepage',
             templateUrl: './homepage.component.html',
             styleUrls: [ './homepage.component.scss' ],
           })
export class HomepageComponent implements OnInit {

  public sections$: Observable<Array<Section> | undefined> = new BehaviorSubject(new Array<Section>()).asObservable();
  public scrollYPosition: number = 0;

  @ViewChild('nbLayoutHeaderComponent') public nbLayoutHeaderComponent: ElementRef | undefined;

  constructor(
    private _sectionService: SectionService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {
  }

  public ngOnInit(): void {
    this._refreshSections();
    this._router.navigate([ '' ], { fragment: 'home' });
  }

  public get displayScrollToTop(): boolean {
    return !!this.scrollYPosition;
  }

  @HostListener('window:scroll', [ '$event' ]) onScroll(e: any): void {
    this.scrollYPosition = e.srcElement.scrollingElement.scrollTop;
  }

  private _refreshSections(): void {
    this.sections$ = this._sectionService.getSections();
  }

}
