/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, OnDestroy } from '@angular/core';
import { HeroService } from '../../../services/hero.service';
import { Hero } from '../../../components/heroes/hero';
import { Subscription }   from 'rxjs/Subscription';
import { SearchFilterPipe } from '../../../pipes/searchFilter.pipe';

@Component( {
	selector:    'hero-list',
	templateUrl: 'hero-list.view.html'
} )

export class HeroListComponent implements OnDestroy {
	public heroes: Hero[];
	public subscription: Subscription;
	public search: string;
	
	private _searchFilter: SearchFilterPipe;
	
	constructor( private _heroesService: HeroService ) {
		this._searchFilter = new SearchFilterPipe();
		
		this._heroesService
			.getHeroes()
			.then( heroes => {
				this.heroes = heroes;
			} );
		
		this.subscription = this._heroesService
			.addEntityEvent$
			.subscribe( hero => {
				this.heroes.push( hero );
				
				this.heroes = this._searchFilter.transform( this.heroes, 'name', this.search ) as Hero[];
				;
			} );
		
		this.subscription = this._heroesService
			.deleteEntityEvent$
			.subscribe( hero => {
				console.log( hero );
				this.heroes = this.heroes.filter( h => h.id !== hero.id );
			} );
	}
	
	ngOnDestroy() {
		// prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}