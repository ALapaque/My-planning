import { HeroBannerComponent } from '../../hero-banner/hero-banner.component';
import { AboutComponent }      from '../../section/about/about.component';
import { Section }             from '../models/section.model';

export const SECTIONS: Array<Section> = new Array<Section>(
  new Section(
    {
      id: 1,
      component: HeroBannerComponent,
      title: 'Time management',
      anchor: '#',
    },
  ),
  new Section(
    {
      id: 2,
      component: null,
      title: 'Fonctionnalités',
      anchor: 'features',
    },
  ),
  new Section(
    {
      id: 3,
      component: null,
      title: 'Secteurs',
      anchor: 'sectors',
    },
  ),
  new Section(
    {
      id: 4,
      component: null,
      title: 'Nos offres',
      anchor: 'offers',
    },
  ),
  new Section(
    {
      id: 5,
      component: null,
      title: 'Clients',
      anchor: 'clients',
    },
  ),
  new Section(
    {
      id: 6,
      component: AboutComponent,
      title: 'About project',
      anchor: 'about'
    },
  ),
);
