/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component } from '@angular/core';
import { WeaponService } from '../../../services/weapon.service';
import { Weapon } from '../../../components/weapons/weapon';

@Component( {
	selector:    'weapon-list',
	templateUrl: 'weapon-list.view.html',
	providers:   [ WeaponService ]
} )

export class WeaponListComponent {
	public weapons: Weapon[];
	
	constructor( private _weaponService: WeaponService ) {
		this._weaponService
		    .getWeapons()
		    .then( weapons => {
			    this.weapons = weapons;
		    } );
	}
	
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
}