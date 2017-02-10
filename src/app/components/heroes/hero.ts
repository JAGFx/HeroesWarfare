/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero {
	id: number;
	name: string;
	attack: number = 100;
	dodge: number = 10;
	damage: number = 0;
	hp: number = 100;
	
	constructor( id: number, name: string, attack: number, resistance: number ) {
		this.id = id;
		this.name = name;
		this.attack = attack;
		this.dodge = resistance;
	}
}
