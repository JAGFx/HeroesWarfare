/**
 * Created by emsm on 12/03/2017.
 */

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../../../services/hero.service';
import { HeroFormComponent } from '../hero-form/hero-form';

@Component( {
	selector:    'hero-new',
	templateUrl: '../hero-form-view.html',
} )

export class HeroNewComponent implements AfterViewInit {
	@ViewChild( HeroFormComponent )
	private form: HeroFormComponent;
	
	/**
	 *
	 * @param _heroesService
	 */
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