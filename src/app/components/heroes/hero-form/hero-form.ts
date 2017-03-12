/**
 * Created by emsm on 12/03/2017.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnexpectedHeroProperty as HeroException } from '../hero.UnexpectedHeroProperty.error';

@Component( {
	selector:    'hero-form',
	templateUrl: 'hero-form.component.html',
} )

export class HeroFormComponent {
	public hero: Hero = new Hero();
	public feedback   = {
		asError: false,
		type:    'error',
		message: ''
	};
	
	@Output()
	public onValidate: EventEmitter<Hero> = new EventEmitter();
	
	private heroBack: Hero;
	private form: FormGroup;
	
	
	constructor( fb: FormBuilder ) {
		this.form = fb.group( {
			name:   [ this.hero.name, Validators.required ],
			attack: [ this.hero.attack, Validators.required ],
			dodge:  [ this.hero.dodge, Validators.required ],
			damage: [ this.hero.damage, Validators.required ],
			hp:     [ this.hero.hp, Validators.required ],
		} );
		
		this.form
		    .valueChanges
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
	
	public init( hero: Hero ) {
		this.hero = new Hero();
		this.hero.copyFrom( hero );
		
		this.heroBack = new Hero();
		this.heroBack.copyFrom( hero );
		
		this.updateForm();
	}
	
	public reset() {
		this.init( this.heroBack );
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
	
	public validate() {
		this.onValidate.emit( this.hero );
	}
}