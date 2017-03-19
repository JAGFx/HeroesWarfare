/**
 * Created by emsm on 12/03/2017.
 */

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../components/commons/base-form';
import { Hero } from '../../../components/heroes/hero';
import { UnexpectedWarfareEntityProperty as HeroException } from '../../../components/commons/warfareEntities/base-entity-warfare-exception';
import { Weapon } from '../../../components/weapons/weapon';
import { WeaponService } from '../../../services/weapon.service';
import { WeaponSerializedPipe } from '../../../pipes/weapon.serializer.pipe';

@Component( {
	selector:    'hero-form',
	templateUrl: '../../../components/commons/warfareEntities/base-warfare-form.component.html',
} )

export class HeroFormComponent extends BaseFormComponent<Hero> {
	private weapons: Weapon[];
	
	constructor( fb: FormBuilder, private _weaponService: WeaponService ) {
		super();
		this.entity = new Hero();
		
		this._weaponService
		    .getWeapons()
		    .then( weapons => this.weapons = weapons );
		
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
	
	public remainingPoints(): number {
		return Hero.MAX_SUM - this.entity.sumProperties();
	}
	
	public init( hero: Hero ) {
		this.entity = new Hero();
		this.entity.copyFrom( hero );
		
		this.entityBack = new Hero();
		this.entity.copyFrom( hero );
		
		this.updateForm();
	}
	
	protected buildForm( fb: FormBuilder ) {
		this.form = fb.group( {
			name:   [ this.entity.name, Validators.required ],
			weapon: [ WeaponService.jsonStringify( this.entity.weapon ), Validators.required ],
			attack: [ this.entity.attack, Validators.required ],
			dodge:  [ this.entity.dodge, Validators.required ],
			damage: [ this.entity.damage, Validators.required ],
			hp:     [ this.entity.hp, Validators.required ],
		} );
	}
	
	protected updateForm() {
		console.log( 'Update', this.entity.attack, this.entity.dodge, this.entity.damage, this.entity.hp, this.entity.weapon );
		this.form.patchValue( {
			name:   this.entity.name,
			weapon: WeaponService.jsonStringify( this.entity.weapon ),
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
			this.entity.weapon = this._weaponService.makeObject( WeaponService.jsonParse( value.weapon ) );
		}
		catch ( e ) {
			if ( e instanceof HeroException ) {
				this.feedback = {
					asError: true,
					type:    'warning',
					message: e.message
				};
				
				this.updateForm();
			}
		}
	}
}