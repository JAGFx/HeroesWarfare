import { Hero } from '../components/heroes/hero';
import { Injectable } from '@angular/core';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export const HEROES: Hero[] = [
	{id: 11, name: 'Mr. Nice', attack: 50, dodge: 9, damage: 5, hp: 100  },
	{id: 12, name: 'Narco', attack: 42, dodge: 7, damage: 5, hp: 100},
	{id: 13, name: 'Bombasto', attack: 57, dodge: 87, damage: 5, hp: 100},
	{id: 14, name: 'Celeritas', attack: 75, dodge: 7, damage: 5, hp: 100},
	{id: 15, name: 'Magneta', attack: 45, dodge: 5, damage: 5, hp: 100},
	{id: 16, name: 'RubberMan', attack: 543, dodge: 4, damage: 5, hp: 100},
	{id: 17, name: 'Dynama', attack: 54, dodge: 45, damage: 5, hp: 100},
	{id: 18, name: 'Dr IQ', attack: 78, dodge: 4, damage: 5, hp: 100},
	{id: 19, name: 'Magma', attack: 78, dodge: 2, damage: 5, hp: 100},
	{id: 20, name: 'Tornado', attack: 78, dodge: 10, damage: 5, hp: 100}
];

@Injectable()
export class HeroService {
	static getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}