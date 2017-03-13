import { HeroFormComponent } from '../heroes/hero-form/hero-form';
import { ViewChild } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../heroes/hero';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseFormController {
	@ViewChild( HeroFormComponent )
	protected form: HeroFormComponent;
	
	constructor( protected _heroesService: HeroService ) {
	}
	
	public abstract validate( hero: Hero );
}