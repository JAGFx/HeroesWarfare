/**
 * Created by SMITHE on 10-Feb-17.
 */

import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../../../services/hero.service';
import { Transition } from "ui-router-ng2";

@Component( {
	selector:    'hero-details',
	templateUrl: 'hero-details.component.html',
} )

export class HeroDetailsComponent {
	@Input()
	public hero: Hero;
	
	constructor( private _heroesService: HeroService, trans: Transition ) {
		this._heroesService
			.getHero( trans.params().id )
			.then( hero => {
				this.hero = hero;
			} );
	}
}