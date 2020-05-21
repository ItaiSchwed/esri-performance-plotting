import {animate, animateChild, query, state, style, transition, trigger} from '@angular/animations';

// export const fadeAnimation =
//   trigger('fadeAnimation', [
//     transition('graph <=> cycles', [
//       query(':enter', style({opacity: '0'}), {optional: true}),
//       query(':leave', [
//         style({opacity: 1}),
//         animate('300ms', style({opacity: '0'}))
//       ], {optional: true}),
//       query(':enter', [
//         style({opacity: 0}),
//         animate('300ms', style({opacity: '1'}))
//       ], {optional: true})
//     ])
//   ]);

export const fadeAnimation =
  trigger('fadeAnimation', [
    state('in', style({opacity: 1})),
    state('out', style({opacity: 0})),
    transition('in => out', animate(300)),
    transition('out => in', animate(400)),
  ]);
