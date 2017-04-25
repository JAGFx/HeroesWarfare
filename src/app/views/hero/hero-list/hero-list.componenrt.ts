/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Hero } from '../../../components/heroes/hero';
import { SearchFilterPipe } from '../../../pipes/searchFilter.pipe';
import { HeroService } from '../../../services/hero.service';

@Component( {
	selector:    'hero-list',
	templateUrl: 'hero-list.view.html'
} )

/**
 * Left menu  - List of Heroes component
 */
export class HeroListComponent implements OnDestroy {
	public heroes: Hero[];
	public subscription: Subscription;
	public search: string;
	
	/**
	 * Import pipe to force filtering after event received
	 */
	private _searchFilter: SearchFilterPipe;
	
	constructor( private _heroesService: HeroService ) {
		this._searchFilter = new SearchFilterPipe();
		
		this._heroesService
			.getHeroes()
			.then( heroes => {
				this.heroes = heroes;
			} );
		
		// Subs to adding hero
		this.subscription = this._heroesService
			.addEntityEvent$
			.subscribe( hero => {
				this.heroes.push( hero );
				this.heroes = this._searchFilter.transform( this.heroes, 'name', this.search ) as Hero[];
			} );
		
		// Subs to removing hero
		this.subscription = this._heroesService
			.deleteEntityEvent$
			.subscribe( hero => {
				this.heroes = this.heroes.filter( h => h.id !== hero.id );
				this.heroes = this._searchFilter.transform( this.heroes, 'name', this.search ) as Hero[];
			} );
	}
	
	ngOnDestroy() {
		// prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}