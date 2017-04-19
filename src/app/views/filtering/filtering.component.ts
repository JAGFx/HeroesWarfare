import { Component } from '@angular/core';
import { BaseEntityWarfare } from '../../components/commons/warfareEntities/base-entity-warfare';
import { HeroService } from '../../services/hero.service';
import { WeaponService } from '../../services/weapon.service';

@Component( {
	selector:    'app-filtering',
	templateUrl: 'filtering.component.html'
} )
export class FilteringComponent {
	public readonly FILTERING_VIEWS = {
		HERO:   'hero',
		WEAPON: 'weapon',
		SEARCH: 'search'
	};
	
	public readonly MAX_TOP_ENTITIES: number = 4;
	
	public filterForm                           = {};
	public warfareEntities: BaseEntityWarfare[] = [];
	
	public formIsShown: boolean = false;
	public currentView: string  = this.FILTERING_VIEWS.HERO;
	
	
	constructor( private _heroesService: HeroService, private _weaponsService: WeaponService ) {
	}
	
	public validate() {
		console.log( this.filterForm );
	}
	
	public showForm() {
		this.formIsShown = true;
	}
	
	public hideForm() {
		this.formIsShown = false;
	}
	
	public sortWarfareEntities() {
		this.warfareEntities.sort( ( a: BaseEntityWarfare, b: BaseEntityWarfare ): any => {
			if ( a.getPerformanceIndex() > b.getPerformanceIndex() )
				return -1;
			
			if ( a.getPerformanceIndex() < b.getPerformanceIndex() )
				return 1;
			
			return 0;
		} );
	}
	
	public onClickTopHeroes() {
		this.hideForm();
		this.currentView = this.FILTERING_VIEWS.HERO;
		this._heroesService
		    .getHeroes()
		    .then( heroes => {
			    this.warfareEntities = [];
			    for ( let hero of heroes )
				    this.warfareEntities.push( this._heroesService.makeObject( hero ) );
			
			    this.sortWarfareEntities();
		    } )
	}
	
	public onClickTopWeapon() {
		this.hideForm();
		this.currentView = this.FILTERING_VIEWS.WEAPON;
		this._weaponsService
		    .getWeapons()
		    .then( weapons => {
			    this.warfareEntities = [];
			    for ( let weapon of weapons )
				    this.warfareEntities.push( this._weaponsService.makeObject( weapon ) );
			
			    this.sortWarfareEntities();
		    } );
	}
	
	public onClickResaerch() {
		this.showForm();
		this.warfareEntities = [];
		this.currentView     = this.FILTERING_VIEWS.SEARCH;
	}
}
