import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  keyframes, useAnimation, AnimationReferenceMetadata
} from '@angular/animations';
// import * as animations from 'angular-bounce';
// import { BOUNCE } from 'angular-bounce';

import { statesList, transitionsList } from './animation-creating';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'animationState', transitionsList
    )
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  state = 'inactive';
  states: string[];

  constructor() {
  	// console.dir(animations);

  }

  ngOnInit() {
  	this.states = statesList;
  }

  setState(state) {
  	this.state = state;
  }

  onBtnClick(state) {
  	this.setState(state);
  }

  animationDone($event) {
  	console.log($event);
  	console.log(this.state);

  	$event.toState === this.state && this.setState('inactive');

  	// this.setState('inactive');
  }
}
