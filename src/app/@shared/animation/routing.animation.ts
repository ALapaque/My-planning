import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('homepage => *', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
              query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave *', [
                style({}),
                animate(1, style({}))
              ], { optional: true }),
            ])
    ]),
    transition('auth => app', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
              query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave *', [
                style({}),
                animate(1, style({}))
              ], { optional: true }),
            ])
    ]),
    transition('auth => homepage', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
              query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave *', [
                style({}),
                animate(1, style({}))
              ], { optional: true }),
            ])
    ]),
    transition('app => auth', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
              query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave *', [
                style({}),
                animate(1, style({}))
              ], { optional: true }),
            ])
    ]),
    transition('app => homepage', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
              query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave *', [
                style({}),
                animate(1, style({}))
              ], { optional: true }),
            ])
    ]),
  ]);
