import { Hero } from '../components/heroes/hero';
import { Injectable } from '@angular/core';
/**
 * Created by SMITHE on 10-Feb-17.
 */


@Injectable()
export class HeroService {
	static getHeroes(): Promise<Hero[]> {
		return Promise.resolve( [
			{ id: 11, name: 'Mr. Nice', attack: 9, dodge: 20, damage: 1, hp: 10 },
			{ id: 12, name: 'Narco', attack: 8, dodge: 19, damage: 2, hp: 9 },
			{ id: 13, name: 'Bombasto', attack: 7, dodge: 18, damage: 3, hp: 8 },
			{ id: 14, name: 'Celeritas', attack: 6, dodge: 17, damage: 4, hp: 7 },
			{ id: 15, name: 'Magneta', attack: 5, dodge: 16, damage: 5, hp: 6 },
			{ id: 16, name: 'RubberMan', attack: 4, dodge: 15, damage: 6, hp: 5 },
			{ id: 17, name: 'Dynama', attack: 3, dodge: 14, damage: 7, hp: 4 },
			{ id: 18, name: 'Dr IQ', attack: 2, dodge: 13, damage: 8, hp: 3 },
			{ id: 19, name: 'Magma', attack: 1, dodge: 12, damage: 9, hp: 2 },
			{ id: 20, name: 'Tornado', attack: 0, dodge: 11, damage: 10, hp: 1 }
		] );
	}
}