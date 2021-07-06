import { Section } from '../models/section.model';

export const SECTIONS: Array<Section> = new Array<Section>(
  new Section(
    {
      id: 1,
      title: 'Time management',
      anchor: '',
    },
  ),
  new Section(
    {
      id: 2,
      title: 'Fonctionnalités',
      anchor: 'features',
    },
  ),
  new Section(
    {
      id: 3,
      title: 'Secteurs',
      anchor: 'sectors',
    },
  ),
  new Section(
    {
      id: 4,
      title: 'Nos offres',
      anchor: 'offers',
    },
  ),
  new Section(
    {
      id: 5,
      title: 'Clients',
      anchor: 'clients',
    },
  ),
  new Section(
    {
      id: 6,
      title: 'About project',
      anchor: 'about',
    },
  ),
);
