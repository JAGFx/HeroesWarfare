/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Weapon } from '../../../components/weapons/weapon';
import { SearchFilterPipe } from '../../../pipes/searchFilter.pipe';
import { WeaponService } from '../../../services/weapon.service';

@Component( {
	selector:    'weapon-list',
	templateUrl: 'weapon-list.view.html'
} )

/**
 * Left menu  - List of Weapon component
 */
export class WeaponListComponent implements OnDestroy {
	public weapons: Weapon[];
	public subscription: Subscription;
	public search: string;
	
	/**
	 * Import pipe to force filtering after event received
	 */
	private _searchFilter: SearchFilterPipe;
	
	constructor( private _weaponService: WeaponService ) {
		this._searchFilter = new SearchFilterPipe();
		
		this._weaponService
			.getWeapons()
			.then( weapons => {
				this.weapons = weapons;
			} );
		
		// Subs to adding weapon
		this.subscription = this._weaponService
			.addEntityEvent$
			.subscribe( weapon => {
				this.weapons.push( weapon );
				this.weapons = this._searchFilter.transform( this.weapons, 'name', this.search ) as Weapon[];
			} );
		
		// Subs to removing weapon
		this.subscription = this._weaponService
			.deleteEntityEvent$
			.subscribe( weapon => {
				this.weapons = this.weapons.filter( w => w.id !== weapon.id );
				this.weapons = this._searchFilter.transform( this.weapons, 'name', this.search ) as Weapon[];
			} );
	}
	
	ngOnDestroy() {
		// Prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}