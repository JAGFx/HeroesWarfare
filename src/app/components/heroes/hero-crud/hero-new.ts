/**
 * Created by emsm on 12/03/2017.
 */

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { BaseFormController } from '../../commons/base-form-controller';
import { HeroService } from '../../../services/hero.service';
import { HeroFormComponent } from '../../../views/hero/hero-form/hero-form';

@Component( {
	selector:    'hero-new',
	templateUrl: '../../../views/hero/hero-form/hero-form.component.html',
} )

/**
 * Component for hero creating
 */
export class HeroNewComponent implements BaseFormController<Hero>, AfterViewInit {
	/**
	 * Sub view of form component
	 */
	@ViewChild( HeroFormComponent )
	public form: HeroFormComponent;
	
	constructor( private _heroesService: HeroService ) {
	}
	
	/**
	 * Initialize wub view form with entity
	 */
	public ngAfterViewInit(): void {
		this.form.init( new Hero() );
	}
	
	/**
	 *  Processing after submitted form
	 *
	 * @param hero Entity submitted
	 */
	public validate( hero: Hero ) {
		this._heroesService
		    .postHero( hero )
		    .then( _hero => {
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