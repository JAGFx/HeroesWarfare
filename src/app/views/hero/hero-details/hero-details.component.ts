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

export class HeroDetailsComponent {
	public hero: Hero;
	public showAbsolutValueProperties: boolean = false;
	
	@Output()
	onDeleteHero: EventEmitter<Hero> = new EventEmitter();
	
	constructor( private _heroService: HeroService, trans: Transition ) {
		this._heroService
		    .getHero( trans.params().id )
		    .then( hero => {
			    this.hero = hero;
		    } );
	}
	
	public deleteHero( hero: Hero ) {
		this.onDeleteHero.emit( hero );
	}
}