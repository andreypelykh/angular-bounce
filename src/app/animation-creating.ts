import * as animations from 'angular-bounce';
import {
	animate,
  transition, AnimationTransitionMetadata, useAnimation
} from '@angular/animations';

function createStatesList(animations: any): string[] {
	return Object.getOwnPropertyNames(animations).filter(filterFn);
}

function filterFn(e) {
	return e  !== '__esModule';
};

function createTransition(state, animations) {
	return transition(`* => ${state}`, [ 
    useAnimation(animations[state])
  ]);
}

function createTransitionsList(states: string[], animations): AnimationTransitionMetadata[] {
	return states.map( (state) => createTransition(state, animations) );
}

export const statesList: string[] = createStatesList(animations);
export const transitionsList: AnimationTransitionMetadata[] = createTransitionsList(statesList, animations);