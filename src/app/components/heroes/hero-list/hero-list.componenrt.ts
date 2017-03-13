/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../../../services/hero.service';

@Component( {
	selector:    'hero-list',
	templateUrl: 'hero-list.component.html',
	providers:   [ HeroService ]
} )

export class HeroListComponent {
	@Input()
	public heroes: Hero[];
	
	/*@Output()
	public onSelectHero = new EventEmitter<Hero>();
	
	public changeHero( hero: Hero ) {
		this.onSelectHero.emit( hero );
	 }*/
	
}