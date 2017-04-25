/**
 * Created by SMITHE on 10-Feb-17.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../components/heroes/hero';
import { HeroService } from '../../../services/hero.service';
import { Transition } from "ui-router-ng2";

@Component( {
	selector:    'hero-details',
	templateUrl: 'hero-details.view.html',
} )

/**
 * Hero detail component
 */
export class HeroDetailsComponent {
	public hero: Hero;
	
	constructor( private _heroService: HeroService, trans: Transition ) {
		this._heroService
		    .getHero( trans.params().id )
		    .then( hero => {
			    this.hero = hero;
		    } );
	}
}