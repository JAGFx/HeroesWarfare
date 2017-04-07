/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, OnDestroy } from '@angular/core';
import { WeaponService } from '../../../services/weapon.service';
import { Weapon } from '../../../components/weapons/weapon';
import { Subscription }   from 'rxjs/Subscription';

@Component( {
	selector:    'weapon-list',
	templateUrl: 'weapon-list.view.html'
} )

export class WeaponListComponent implements OnDestroy {
	public weapons: Weapon[];
	public subscription: Subscription;
	
	constructor( private _weaponService: WeaponService ) {
		this._weaponService
			.getWeapons()
			.then( weapons => {
				this.weapons = weapons;
			} );
		
		this.subscription = this._weaponService
			.addWeaponEvent$
			.subscribe( weapon => {
				this.weapons.push( weapon );
			} );
		
		this.subscription = this._weaponService
			.deleteWeaponEvent$
			.subscribe( weapon => {
				this.weapons = this.weapons.filter( w => w.id !== weapon.id );
			} );
	}
	
	// TODO Pass method in HeroDetails & set EventEmitter
	public deleteWeapon( weapon: Weapon ) {
		this._weaponService
			.deleteWeapon( weapon )
			.then( () => {
				this._weaponService
					.getWeapons()
					.then( weapons => {
						this.weapons = weapons;
					} );
			} );
	}
	
	ngOnDestroy() {
		// prevent memory leak when component destroyed
		this.subscription.unsubscribe();
	}
}