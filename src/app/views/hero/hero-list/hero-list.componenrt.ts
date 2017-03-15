/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component } from '@angular/core';
import { HeroService } from '../../../services/hero.service';
import { Hero } from '../../../components/heroes/hero';

@Component( {
	selector:    'hero-list',
	templateUrl: 'hero-list.view.html',
	providers:   [ HeroService ]
} )

export class HeroListComponent {
	public heroes: Hero[];
	
	constructor( private _heroesService: HeroService ) {
		this._heroesService
			.getHeroes()
			.then( heroes => {
				this.heroes = heroes;
			} );
	}
	
	public deleteHero( hero: Hero ) {
		this._heroesService
			.deleteHero( hero )
			.then( () => {
				this._heroesService
					.getHeroes()
					.then( heroes => {
						this.heroes = heroes;
					} );
			} );
	}
}