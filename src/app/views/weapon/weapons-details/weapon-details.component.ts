/**
 * Created by SMITHE on 10-Feb-17.
 */

import { Component } from '@angular/core';
import { Transition } from "ui-router-ng2";
import { Weapon } from '../../../components/weapons/weapon';
import { WeaponService } from '../../../services/weapon.service';

@Component( {
	selector:    'weapon-details',
	templateUrl: 'weapon-details.view.html',
} )

export class WeaponDetailsComponent {
	public weapon: Weapon;
	
	constructor( private _weaponService: WeaponService, trans: Transition ) {
		this._weaponService
		    .getWeapon( trans.params().id )
		    .then( weapon => {
			    this.weapon = weapon;
			} );
	}
}