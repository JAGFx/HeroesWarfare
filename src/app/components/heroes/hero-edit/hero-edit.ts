/**
 * Created by SMITHE on 02-Mar-17.
 */

import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { Transition } from "ui-router-ng2";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnexpectedHeroProperty as HeroException } from '../hero.UnexpectedHeroProperty.error';

@Component( {
	selector:    'hero-edit',
	templateUrl: 'hero-edit.html',
} )

export class HeroEditComponent {
	@Input()
	public hero: Hero;
	
	private form: FormGroup;
	private currentId: number;
	private feedback = {
		asError: false,
		type:    '',
		message: ''
	};
	
	// TODO Fetch from DB
	constructor( fb: FormBuilder, trans: Transition ) {
		this.currentId = trans.params().id;
		this.hero      = new Hero( this.currentId, 'Plop' );
		
		this.form = fb.group( {
			name:   [ this.hero.name, Validators.required ],
			attack: [ this.hero.attack, Validators.required ],
			dodge:  [ this.hero.dodge, Validators.required ],
			damage: [ this.hero.damage, Validators.required ],
			hp:     [ this.hero.hp, Validators.required ],
		} );
		
		this.form.valueChanges
			.map( ( value ) => {
				try {
					this.hero.name   = value.name;
					this.hero.attack = value.attack;
					this.hero.dodge  = value.dodge;
					this.hero.damage = value.damage;
					this.hero.hp     = value.hp;
					
				} catch ( e ) {
					
					if ( e instanceof HeroException ) {
						this.feedback = {
							asError: true,
							type:    'error',
							message: e.message
						};
						
						this.updateForm();
					}
				}
				return value;
			} )
			.subscribe( ( value ) => {
				return value;
			} );
	}
	
	public reset() {
		this.hero = new Hero( this.currentId, 'Plop' );
		this.updateForm();
	}
	
	private updateForm() {
		this.form.patchValue( {
			name:   this.hero.name,
			attack: this.hero.attack,
			dodge:  this.hero.dodge,
			damage: this.hero.damage,
			hp:     this.hero.hp
		} );
	}
	
	public validate( hero: Hero ) {
		console.log( hero );
	}
}