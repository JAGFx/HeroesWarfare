/**
 * Created by SMITHE on 02-Mar-17.
 */

import { Component, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { Transition } from "ui-router-ng2";
import { HeroService } from '../../../services/hero.service';
import { HeroFormComponent } from '../hero-form/hero-form';

@Component( {
	selector:    'hero-edit',
	templateUrl: '../hero-form-view.html',
} )

export class HeroEditComponent {
	@ViewChild( HeroFormComponent )
	private form: HeroFormComponent;
	
	/**
	 *
	 * @param _heroesService
	 * @param trans
	 */
	constructor( private _heroesService: HeroService, trans: Transition ) {
		this._heroesService
		    .getHero( trans.params().id )
		    .then( hero => {
			    console.log( 'Init', trans.params().id, hero );
			    this.form.init( hero );
		    } );
	}
	
	public validate( hero: Hero ) {
		this._heroesService
		    .putHero( hero )
		    .then( _hero => {
			    if ( _hero === this.form.hero ) {
				    this.form.feedback = {
					    asError: true,
					    type:    'success',
					    message: 'Modification effectué avec succès'
				    };
				    this.form.init( _hero );
				
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