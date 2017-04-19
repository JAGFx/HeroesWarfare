/**
 * Created by emsm on 12/03/2017.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	public createDb(): {} {
		let heroes = [
			{
				id:     1, name: 'Snow Raven', attack: 9, dodge: 20, damage: 1, hp: 10,
				weapon: { id: 1, name: 'Glinting Vessel', attack: -5, dodge: 5, damage: 1, hp: -1 }
			},
			{ id: 2, name: 'Water Bat', attack: 8, dodge: 19, damage: 2, hp: 9 },
			{ id: 3, name: 'Dazzler', attack: 7, dodge: 18, damage: 3, hp: 8 },
			{ id: 4, name: 'Light Antman', attack: 6, dodge: 17, damage: 4, hp: 7 },
			{ id: 5, name: 'Alley Cat', attack: 5, dodge: 16, damage: 5, hp: 6 },
			{ id: 6, name: 'Crusher', attack: 4, dodge: 15, damage: 6, hp: 5 },
			{ id: 7, name: 'Bolt', attack: 3, dodge: 14, damage: 7, hp: 4 },
			{ id: 8, name: 'Blue Falcon', attack: 2, dodge: 13, damage: 8, hp: 3 },
			{ id: 9, name: 'Scarlet Monarch', attack: 1, dodge: 12, damage: 9, hp: 2 },
			{ id: 10, name: 'Starlight', attack: 1, dodge: 11, damage: 10, hp: 1 }
		];
		
		let weapons = [
			{ id: 1, name: 'Glinting Vessel', attack: -5, dodge: 5, damage: 1, hp: -1 },
			{ id: 2, name: 'Nightkiss', attack: 4, dodge: -4, damage: -2, hp: 2 },
			{ id: 3, name: 'Apostle', attack: -3, dodge: 3, damage: 3, hp: -3 },
			{ id: 4, name: 'Dawnlight', attack: 2, dodge: -2, damage: -4, hp: 4 },
			{ id: 5, name: 'Nexus', attack: -1, dodge: 1, damage: 5, hp: -5 },
			{ id: 6, name: 'Enigma', attack: 5, dodge: -5, damage: 0, hp: 0 }
		];
		return { heroes, weapons };
	}
}