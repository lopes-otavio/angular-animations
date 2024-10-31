import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
      transition: '0.1s',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      transform: 'scale(1.02)',
      transition: '0.1s',
    })
  ),
  // transition('default => highlighted', [
  //   animate(
  //     '200ms ease-out',
  //     style({
  //       transform: 'scale(1.02)',
  //     })
  //   ),
  //   animate(200),
  // ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '0.09s',
      style({
        transform: 'scale(0.6)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate(
      '400ms ease-out',
      keyframes([
        style({ offset: 0, opacity: 0, width: 0 }),
        style({ offset: 0.8, opacity: 0.5, width: '*' }),
        style({ offset: 1, opacity: 1, width: '*' }),
      ])
    ),
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ opacity: 0, width: 0 })),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(
          200,
          style({
            backgroundColor: '#63b77c',
          })
        ),
        animate(
          100,
          style({
            transform: 'scale(1.1)',
          })
        ),
      ]),
    ]),
    animate(
      200,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(
          200,
          style({
            backgroundColor: '#6c757d',
          })
        ),
        animate(
          100,
          style({
            transform: 'scale(1.1)',
          })
        ),
      ]),
    ]),
    animate(
      200,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
]);

export const searchMessageTrigger = trigger('searchMessage', [
  transition(':enter', [
    style({ transform: 'translateX(-50%)', opacity: 0 }),
    animate('0.3s ease', style({ transform: 'translateX(0)', opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.2s ease', style({ transform: 'translateX(-100%)', opacity: 0 })),
  ]),
]);

export const shakeTrigger = trigger('shakeAnimaion', [
  transition('* => *', [
    query(
      'input.ng-invalid:focus, select.ng-invalid:focus',
      [
        animate(
          '0.8s',
          keyframes([
            style({ border: '1px solid red' }),
            style({ transform: 'translateX(0)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        stagger(100, [
          animate(
            '0.5s ease-out',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4,
              }),
              style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
