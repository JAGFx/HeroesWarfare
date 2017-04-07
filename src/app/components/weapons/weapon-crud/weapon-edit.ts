/**
 * Created by SMITHE on 02-Mar-17.
 */

import { Component, ViewChild } from '@angular/core';
import { Transition } from "ui-router-ng2";
import { BaseFormController } from '../../commons/base-form-controller';
import { WeaponFormComponent } from '../../../views/weapon/weapon-form/weapon-form';
import { Weapon } from '../weapon';
import { WeaponService } from '../../../services/weapon.service';

@Component( {
	selector:    'weapon-edit',
	templateUrl: '../../../views/weapon/weapon-form/weapon-form.component.html',
} )

export class WeaponEditComponent implements BaseFormController<Weapon> {
	@ViewChild( WeaponFormComponent )
	public form: WeaponFormComponent;
	
	/**
	 *
	 * @param _weaponService
	 * @param trans
	 */
	constructor( private _weaponService: WeaponService, trans: Transition ) {
		this._weaponService
		    .getWeapon( trans.params().id )
		    .then( weapon => {
			    console.log( 'Init', trans.params().id, weapon );
			    this.form.init( weapon );
		    } );
	}
	
	public validate( weapon: Weapon ) {
		this._weaponService
			.announceDeleteEntity( this.form.entityBack );
		
		this._weaponService
		    .putWeapon( weapon )
		    .then( _weapon => {
			    if ( this.form.entity.equal( _weapon ) ) {
				    this.form.feedback = {
					    asError: true,
					    type:    'success',
					    message: 'Modification effectué avec succès'
				    };
				    this.form.init( _weapon );
				
			    } else {
				    this.form.feedback = {
					    asError: true,
					    type:    'error',
					    message: 'Impossible de mettre à jour'
				    };
			    }
		    } );
	}
}