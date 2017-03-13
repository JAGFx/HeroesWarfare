import { BaseEntityWarfare } from '../commons/base-entity-warfare';
import { UnexpectedWarfareEntityProperty } from '../commons/base-entity-warfare-exception';
/**
 * Created by emsm on 13/03/2017.
 */

export class Weapons extends BaseEntityWarfare {
	public static readonly MIN_VALUE: number = -5;
	public static readonly MAX_VALUE: number = 5;
	public static readonly MAX_SUM: number   = 0;
	
	protected _name: string;
	protected _attack: number = Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
	protected _dodge: number  = Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
	protected _damage: number = Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
	protected _hp: number     = Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
	
	constructor( id?: string, name?: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		super();
		
		this._id    = id || Weapons.generateUUID();
		this._name  = name || '';
		this.attack = attack || Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
		this.dodge  = dodge || Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
		this.damage = damage || Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
		this.hp     = hp || Weapons.MIN_VALUE + Weapons.MAX_SUM / 2;
	}
	
	protected validateProperties(): boolean {
		return this.sumProperties() === Weapons.MAX_SUM;
	}
	
	
	protected checkProperty( current, nextValue, property: string ): any {
		return null;
	}
	
	public getMaxValue(): number {
		return null;
	}
	
	public getMinValue(): number {
		return null;
	}
	
	public getMaxSum(): number {
		return null;
	}
	
	// ----------------------------------------------------------------------- GETTERS
	
	public get name(): string {
		return null;
	}
	
	public get attack(): number {
		return null;
	}
	
	public get dodge(): number {
		return null;
	}
	
	public get damage(): number {
		return null;
	}
	
	public get hp(): number {
		return null;
	}
	
	// ----------------------------------------------------------------------- SETTERS
	
	public set name( value: string ) {
		this._name = value;
	}
	
	public set attack( value: number ) {
		const oldValue: number = this._attack;
		this._attack           = value;
		
		if ( this._attack < Weapons.MIN_VALUE ) {
			this._attack = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.ATTACK,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( this._attack > Weapons.MAX_VALUE ) {
			this._attack = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.ATTACK,
				UnexpectedWarfareEntityProperty.MESSAGES.MAX_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._attack = oldValue;
			throw new UnexpectedWarfareEntityProperty( this, UnexpectedWarfareEntityProperty.PROPERTIES.ATTACK );
		}
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		if ( this._dodge < Weapons.MIN_VALUE ) {
			this._dodge = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.DODGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( this._dodge > Weapons.MAX_VALUE ) {
			this._dodge = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.DODGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MAX_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._dodge = oldValue;
			throw new UnexpectedWarfareEntityProperty( this, UnexpectedWarfareEntityProperty.PROPERTIES.DODGE );
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		if ( this._damage < Weapons.MIN_VALUE ) {
			this._damage = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( this._damage > Weapons.MAX_VALUE ) {
			this._damage = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MAX_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._damage = oldValue;
			throw new UnexpectedWarfareEntityProperty( this, UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE );
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		if ( this._hp < Weapons.MIN_VALUE ) {
			this._hp = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.HP,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( this._hp > Weapons.MAX_VALUE ) {
			this._hp = oldValue;
			throw new UnexpectedWarfareEntityProperty(
				this,
				UnexpectedWarfareEntityProperty.PROPERTIES.HP,
				UnexpectedWarfareEntityProperty.MESSAGES.MAX_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._hp = oldValue;
			throw new UnexpectedWarfareEntityProperty( this, UnexpectedWarfareEntityProperty.PROPERTIES.HP );
		}
	}
}