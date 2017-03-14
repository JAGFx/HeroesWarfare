/**
 * Created by SMITHE on 10-Feb-17.
 */

import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../../services/weapon.service';
import { Weapon } from '../../components/weapons/weapon';

@Component( {
	templateUrl: 'weapon.component.html'
} )

export class WeaponView implements OnInit {
	public weapons: Weapon[];
	
	constructor( private _weaponService: WeaponService ) {
	}
	
	public ngOnInit(): void {
		this.getWeapons();
	}
	
	public getWeapons(): void {
		this._weaponService
			.getWeapons()
			.then( weapons => this.weapons = weapons );
	}
}
