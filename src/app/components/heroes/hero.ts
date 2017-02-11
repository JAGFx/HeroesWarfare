import { UnexpectedHeroProperty as HeroException } from './hero.UnexpectedHeroProperty.error';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero {
	static readonly MAX_SUM: number = 40;
	
	private _id: number;
	private _name: string;
	private _attack: number = Hero.MAX_SUM / 4;
	private _dodge: number  = Hero.MAX_SUM / 4;
	private _damage: number = Hero.MAX_SUM / 4;
	private _hp: number     = Hero.MAX_SUM / 4;
	
	constructor( id: number, name: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		this._id    = id;
		this._name  = name;
		this.attack = attack;
		this.dodge  = dodge;
		this.damage = damage;
		this.hp     = hp;
	}
	
	private validateCharacteristics(): boolean {
		console.log( this.name, this.attack, this.dodge, this.damage, this.hp );
		return ( this._attack + this._dodge + this._damage + this._hp ) <= Hero.MAX_SUM;
	}
	
	// ----------------------------------------------------------------------- GETTERS
	
	public get id(): number {
		return this._id;
	}
	
	public get name(): string {
		return this._name;
	}
	
	public get attack(): number {
		return this._attack;
	}
	
	public get dodge(): number {
		return this._dodge;
	}
	
	public get damage(): number {
		return this._damage;
	}
	
	public get hp(): number {
		return this._hp;
	}
	
	// ----------------------------------------------------------------------- SETTERS
	
	public set id( value: number ) {
		this._id = value;
	}
	
	public set name( value: string ) {
		this._name = value;
	}
	
	public set attack( value: number ) {
		this._attack = value;
		
		if ( !this.validateCharacteristics() )
			throw new HeroException( HeroException.PROPERTIES.ATTACK );
	}
	
	public set dodge( value: number ) {
		this._dodge = value;
		
		if ( !this.validateCharacteristics() )
			throw new HeroException( HeroException.PROPERTIES.DODGE );
	}
	
	public set damage( value: number ) {
		this._damage = value;
		
		if ( !this.validateCharacteristics() )
			throw new HeroException( HeroException.PROPERTIES.DAMAGE );
	}
	
	public set hp( value: number ) {
		this._hp = value;
		
		if ( !this.validateCharacteristics() )
			throw new HeroException( HeroException.PROPERTIES.HP );
	}
}
