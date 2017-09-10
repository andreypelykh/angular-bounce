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
          transition('inactive => active', animate('1s', BOUNCE_IN)),
          transition('active => inactive', animate('1s', BOUNCE_OUT))
        ])
      ]
    })

```
