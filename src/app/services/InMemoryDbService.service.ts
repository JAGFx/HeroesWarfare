/**
 * Created by emsm on 12/03/2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../components/heroes/hero';
import { Weapon } from '../components/weapons/weapon';
export class InMemoryDataService implements InMemoryDbService {
	public createDb(): {} {
		let heroes = [
			{ id: Hero.generateUUID(), name: 'Mr. Nice', attack: 9, dodge: 20, damage: 1, hp: 10 },
			{ id: Hero.generateUUID(), name: 'Narco', attack: 8, dodge: 19, damage: 2, hp: 9 },
			{ id: Hero.generateUUID(), name: 'Bombasto', attack: 7, dodge: 18, damage: 3, hp: 8 },
			{ id: Hero.generateUUID(), name: 'Celeritas', attack: 6, dodge: 17, damage: 4, hp: 7 },
			{ id: Hero.generateUUID(), name: 'Magneta', attack: 5, dodge: 16, damage: 5, hp: 6 },
			{ id: Hero.generateUUID(), name: 'RubberMan', attack: 4, dodge: 15, damage: 6, hp: 5 },
			{ id: Hero.generateUUID(), name: 'Dynama', attack: 3, dodge: 14, damage: 7, hp: 4 },
			{ id: Hero.generateUUID(), name: 'Dr IQ', attack: 2, dodge: 13, damage: 8, hp: 3 },
			{ id: Hero.generateUUID(), name: 'Magma', attack: 1, dodge: 12, damage: 9, hp: 2 },
			{ id: Hero.generateUUID(), name: 'Tornado', attack: 0, dodge: 11, damage: 10, hp: 1 }
		];
		
		let weapons = [
			{ id: Weapon.generateUUID(), name: 'Weap1', attack: 9, dodge: 20, damage: 1, hp: 10 },
			{ id: Weapon.generateUUID(), name: 'Weap2', attack: 8, dodge: 19, damage: 2, hp: 9 },
			{ id: Weapon.generateUUID(), name: 'Weap3', attack: 7, dodge: 18, damage: 3, hp: 8 },
			{ id: Weapon.generateUUID(), name: 'Weap4', attack: 6, dodge: 17, damage: 4, hp: 7 },
			{ id: Weapon.generateUUID(), name: 'Weap5', attack: 5, dodge: 16, damage: 5, hp: 6 },
			{ id: Weapon.generateUUID(), name: 'Weap6', attack: 4, dodge: 15, damage: 6, hp: 5 }
		];
		return { heroes, weapons };
	}
}