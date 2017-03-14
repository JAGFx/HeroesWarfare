/**
 * Created by emsm on 12/03/2017.
 */

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { BaseFormController } from '../../commons/base-form-controller';
import { HeroService } from '../../../services/hero.service';
import { HeroFormComponent } from '../hero-form/hero-form';

@Component( {
	selector:    'hero-new',
	templateUrl: '../hero-form/hero-form.component.html',
} )

export class HeroNewComponent implements BaseFormController<Hero>, AfterViewInit {
	@ViewChild( HeroFormComponent )
	public form: HeroFormComponent;
	
	constructor( private _heroesService: HeroService ) {
	}
	
	public ngAfterViewInit(): void {
		this.form.init( new Hero() );
	}
	
	public validate( hero: Hero ) {
		this._heroesService
			.postHero( hero )
			.then( _hero => {
				console.log( _hero, hero );
				
				if ( this.form.entity.equal( _hero ) ) {
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