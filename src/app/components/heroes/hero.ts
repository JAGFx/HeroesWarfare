import { UnexpectedHeroProperty as HeroException } from './hero.UnexpectedHeroProperty.error';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero {
	public static readonly MIN_VALUE: number      = 1;
	public static readonly MAX_SUM: number        = 40;
	private static readonly NB_PROPERTIES: number = 4;
	
	private _id: number;
	private _name: string;
	private _attack: number                       = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	private _dodge: number                        = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	private _damage: number                       = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	private _hp: number                           = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	
	constructor( id: number, name: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		this._id    = id;
		this._name  = name;
		this.attack = attack || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.dodge  = dodge || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.damage = damage || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.hp     = hp || Hero.MAX_SUM / Hero.NB_PROPERTIES;
	}
	
	private validateCharacteristics(): boolean {
		//console.log( this );
		//console.log( this.name, this.attack, this.dodge, this.damage, this.hp );
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
		const oldValue: number = this._attack;
		this._attack           = value;
		
		if ( this._attack < Hero.MIN_VALUE ) {
			this._attack = oldValue;
			throw new HeroException(
				HeroException.PROPERTIES.ATTACK,
				HeroException.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateCharacteristics() ) {
			this._attack = oldValue;
			throw new HeroException( HeroException.PROPERTIES.ATTACK );
		}
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		if ( this._dodge < Hero.MIN_VALUE ) {
			this._dodge = oldValue;
			throw new HeroException(
				HeroException.PROPERTIES.DODGE,
				HeroException.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateCharacteristics() ) {
			this._dodge = oldValue;
			throw new HeroException( HeroException.PROPERTIES.DODGE );
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		if ( this._damage < Hero.MIN_VALUE ) {
			this._damage = oldValue;
			throw new HeroException(
				HeroException.PROPERTIES.DAMAGE,
				HeroException.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateCharacteristics() ) {
			this._damage = oldValue;
			throw new HeroException( HeroException.PROPERTIES.DAMAGE );
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		if ( this._hp < Hero.MIN_VALUE ) {
			this._hp = oldValue;
			throw new HeroException(
				HeroException.PROPERTIES.HP,
				HeroException.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateCharacteristics() ) {
			this._hp = oldValue;
			throw new HeroException( HeroException.PROPERTIES.HP );
		}
	}
}
