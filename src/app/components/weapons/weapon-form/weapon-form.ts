/**
 * Created by emsm on 12/03/2017.
 */

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UnexpectedWarfareEntityProperty as WeaponException } from '../../commons/warfareEntities/base-entity-warfare-exception'
import { BaseFormComponent } from '../../commons/base-form';
import { Weapon } from '../weapon';
import { BaseEntityWarfare } from '../../commons/warfareEntities/base-entity-warfare';

@Component( {
	selector:    'weapon-form',
	templateUrl: '../../commons/warfareEntities/base-warfare-form.component.html',
} )

export class WeaponFormComponent extends BaseFormComponent<Weapon> {
	
	constructor( fb: FormBuilder ) {
		super();
		this.entity = new Weapon();
		
		this.buildForm( fb );
		this.form
		    .valueChanges
		    .map( ( value ) => {
			    this.onChangeEntity( value );
			    return value;
		    } )
		    .subscribe( ( value ) => {
			    return value;
		    } );
	}
	
	// FIXME: Get correct remaining point
	public remainingPoints(): number {
		return ( Math.abs( Weapon.MIN_VALUE ) + Math.abs( Weapon.MAX_VALUE ) ) * BaseEntityWarfare.NB_PROPERTIES - this.entity.sumProperties();
	}
	
	public init( weapon: Weapon ) {
		this.entity = new Weapon();
		this.entity.copyFrom( weapon );
		
		this.entityBack = new Weapon();
		this.entityBack.copyFrom( weapon );
		
		this.updateForm();
	}
	
	protected buildForm( fb: FormBuilder ) {
		this.form = fb.group( {
			name:   [ this.entity.name, Validators.required ],
			attack: [ this.entity.attack, Validators.required ],
			dodge:  [ this.entity.dodge, Validators.required ],
			damage: [ this.entity.damage, Validators.required ],
			hp:     [ this.entity.hp, Validators.required ],
		} );
	}
	
	protected updateForm() {
		console.log( 'Update', this.entity.attack, this.entity.dodge, this.entity.damage, this.entity.hp );
		this.form.patchValue( {
			name:   this.entity.name,
			attack: this.entity.attack,
			dodge:  this.entity.dodge,
			damage: this.entity.damage,
			hp:     this.entity.hp
		} );
	}
	
	protected onChangeEntity( value ) {
		try {
			this.entity.name   = value.name;
			this.entity.attack = value.attack;
			this.entity.dodge  = value.dodge;
			this.entity.damage = value.damage;
			this.entity.hp     = value.hp;
			
		} catch ( e ) {
			
			if ( e instanceof WeaponException ) {
				this.feedback = {
					asError: true,
					type:    'error',
					message: e.message
				};
				
				this.updateForm();
			}
		}
	}
}