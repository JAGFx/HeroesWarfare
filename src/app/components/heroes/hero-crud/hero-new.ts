/**
 * Created by emsm on 12/03/2017.
 */

import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../hero';
import { BaseFormController } from '../../commons/base-form-controller';
import { HeroService } from '../../../services/hero.service';

@Component( {
	selector:    'hero-new',
	templateUrl: '../hero-form-view.html',
} )

export class HeroNewComponent extends BaseFormController implements AfterViewInit {
	public ngAfterViewInit(): void {
		this.form.init( new Hero() );
	}
	
	constructor( _heroesService: HeroService ) {
		super( _heroesService );
	}
	
	public validate( hero: Hero ) {
		this._heroesService
			.postHero( hero )
			.then( _hero => {
				console.log( _hero, hero );
				
				if ( this.form.hero.equal( _hero ) ) {
					this.form.feedback = {
						asError: true,
						type:    'success',
						message: 'Ajout effectuée avec succès'
					};
					this.form.init( _hero );
					
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