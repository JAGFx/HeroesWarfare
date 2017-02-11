/**
 * Created by SMITHE on 10-Feb-17.
 */

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../components/heroes/hero';
import { HeroService } from '../../services/hero.service';

@Component( {
	templateUrl: 'hero.component.html'
} )

export class HeroView implements OnInit {
	public heroes: Hero[];
	public currentHero: Hero;
	
	public ngOnInit(): void {
		this.getHeroes();
	}
	
	public getHeroes(): void {
		HeroService.getHeroes().then( heroes => this.heroes = heroes );
	}
	
	public updateCurrentHero( hero: Hero ) {
		this.currentHero = hero;
	}
}
