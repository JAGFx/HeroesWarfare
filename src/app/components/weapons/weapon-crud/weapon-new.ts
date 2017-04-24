/**
 * Created by emsm on 12/03/2017.
 */

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BaseFormController } from '../../commons/base-form-controller';
import { Weapon } from '../weapon';
import { WeaponFormComponent } from '../../../views/weapon/weapon-form/weapon-form';
import { WeaponService } from '../../../services/weapon.service';

@Component( {
	selector:    'weapon-new',
	templateUrl: '../../../views/weapon/weapon-form/weapon-form.component.html',
} )

/**
 * Component for weapon creating
 */
export class WeaponNewComponent implements BaseFormController<Weapon>, AfterViewInit {
	/**
	 * Sub view of form component
	 */
	@ViewChild( WeaponFormComponent )
	public form: WeaponFormComponent;
	
	constructor( private _weaponService: WeaponService ) {
	}
	
	/**
	 * Initialize wub view form with entity
	 */
	public ngAfterViewInit(): void {
		this.form.init( new Weapon() );
	}
	
	/**
	 *  Processing after submitted form
	 *
	 * @param weapon Entity submitted
	 */
	public validate( weapon: Weapon ) {
		this._weaponService
		    .postWeapon( weapon )
		    .then( _weapon => {
			    console.log( _weapon, weapon );
			
			    if ( this.form.entity.equal( _weapon ) ) {
				    this.form.feedback = {
					    asError: true,
					    type:    'success',
					    message: 'Ajout effectuée avec succès'
				    };
				    this.form.init( _weapon );
				
			    } else {
				    this.form.feedback = {
					    asError: true,
					    type:    'error',
					    message: 'Impossible d\'ajouter'
				    };
			    }
		    } );
	}
}