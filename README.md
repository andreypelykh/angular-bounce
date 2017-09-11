Angular Bounce
=========

Animate.css for Angular4;

## Installation

  `npm install angular-bounce --save`

## Usage

```typescript
    import { BOUNCE_IN, BOUNCE_OUT } from 'angular-bounce';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
      animations: [
        trigger('heroState', [
          transition('inactive => active', [ 
            useAnimation(BOUNCE_IN)
          ]),
          transition('active => inactive', [ 
            useAnimation(BOUNCE_OUT)
          ])
        ])
      ]
    })

```

## Attention! The library doesn't work with AOT compiler. 