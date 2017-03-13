/**
 * Created by emsm on 12/03/2017.
 */

import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormBuilder, Validators } from '@angular/forms';
import { UnexpectedHeroProperty as HeroException } from '../hero.UnexpectedHeroProperty.error';
import { BaseFormComponent } from '../../commons/base-form';

@Component( {
	selector:    'hero-form',
	templateUrl: 'hero-form.component.html',
} )

export class HeroFormComponent extends BaseFormComponent {
	public HERO_MAX_SUM = Hero.MAX_SUM;
		
	constructor( fb: FormBuilder ) {
		super();
		
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
	
	public init( hero: Hero ) {
		this.hero = new Hero();
		this.hero.copyFrom( hero );
		
		this.heroBack = new Hero();
		this.heroBack.copyFrom( hero );
		
		this.updateForm();
	}
	
	protected buildForm( fb: FormBuilder ) {
		this.form = fb.group( {
			name:   [ this.hero.name, Validators.required ],
			attack: [ this.hero.attack, Validators.required ],
			dodge:  [ this.hero.dodge, Validators.required ],
			damage: [ this.hero.damage, Validators.required ],
			hp:     [ this.hero.hp, Validators.required ],
		} );
	}
	
	protected updateForm() {
		this.form.patchValue( {
			name:   this.hero.name,
			attack: this.hero.attack,
			dodge:  this.hero.dodge,
			damage: this.hero.damage,
			hp:     this.hero.hp
		} );
	}
	
	protected onChangeEntity( value ) {
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
	}
}