import { Component } from '@angular/core';
import { BaseEntityWarfare } from '../../components/commons/warfareEntities/base-entity-warfare';
import { Hero } from '../../components/heroes/hero';
import { Weapon } from '../../components/weapons/weapon';
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
	
	public filterForm                           = { entity: '', property: '', term: '' };
	public warfareEntities: BaseEntityWarfare[] = [];
	
	public formIsShown: boolean = false;
	public currentView: string  = this.FILTERING_VIEWS.HERO;
	
	
	constructor( private _heroesService: HeroService, private _weaponsService: WeaponService ) {
		this.onClickTopHeroes();
	}
	
	public validate() {
		if ( this.filterForm.entity === Hero.name )
			this._heroesService
			    .search( this.filterForm.property, this.filterForm.term )
			    .then( heroes => this.prepareHeroEntities( heroes ) );
		
		else if ( this.filterForm.entity === Weapon.name )
			this._weaponsService
			    .search( this.filterForm.property, this.filterForm.term )
			    .then( weapons => this.prepareWeaponEntities( weapons ) );
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
	
	private prepareHeroEntities( heroes: any[] ) {
		this.warfareEntities = [];
		for ( let hero of heroes )
			this.warfareEntities.push( this._heroesService.makeObject( hero ) );
		
		this.sortWarfareEntities();
	}
	
	private prepareWeaponEntities( weapons: any[] ) {
		this.warfareEntities = [];
		for ( let weapon of weapons )
			this.warfareEntities.push( this._weaponsService.makeObject( weapon ) );
		
		this.sortWarfareEntities();
	}
	
	public onClickTopHeroes() {
		this.hideForm();
		this.currentView = this.FILTERING_VIEWS.HERO;
		this._heroesService
		    .getHeroes()
		    .then( heroes => this.prepareHeroEntities( heroes ) );
	}
	
	public onClickTopWeapon() {
		this.hideForm();
		this.currentView = this.FILTERING_VIEWS.WEAPON;
		this._weaponsService
		    .getWeapons()
		    .then( weapons => this.prepareWeaponEntities( weapons ) );
	}
	
	public onClickResaerch() {
		this.showForm();
		this.warfareEntities = [];
		this.currentView     = this.FILTERING_VIEWS.SEARCH;
	}
}
