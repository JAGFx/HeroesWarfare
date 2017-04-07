/**
 * Created by SMITHE on 02-Mar-17.
 */

import { Component, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { Transition } from "ui-router-ng2";
import { HeroService } from '../../../services/hero.service';
import { BaseFormController } from '../../commons/base-form-controller';
import { HeroFormComponent } from '../../../views/hero/hero-form/hero-form';

@Component( {
	selector:    'hero-edit',
	templateUrl: '../../../views/hero/hero-form/hero-form.component.html',
} )

export class HeroEditComponent implements BaseFormController<Hero> {
	@ViewChild( HeroFormComponent )
	public form: HeroFormComponent;
	
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
			.announceDeleteEntity( this.form.entityBack );
		
		this._heroesService
			.putHero( hero )
			.then( _hero => {
				if ( this.form.entity.equal( _hero ) ) {
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