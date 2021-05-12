import { Component, Input, OnInit } from '@angular/core';

@Component({
             selector: 'app-scroll-to-top',
             templateUrl: './scroll-to-top.component.html',
             styleUrls: [ './scroll-to-top.component.scss' ],
           })
export class ScrollToTopComponent implements OnInit {

  @Input() public container: 'app' | 'homepage' | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * test
   * @param {string} location
   * @param {number} wait
   */
  public scrollToAnchor(location: string | undefined, wait: number = 250): void {
    if (!location) {
      return;
    }
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' });
      }, wait);
    }
  }
}
