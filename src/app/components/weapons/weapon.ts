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
	
	
	protected checkProperty( nextValue, property: string ): any {
		if ( nextValue < Weapons.MIN_VALUE ) {
			throw new UnexpectedWarfareEntityProperty(
				this,
				property,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( nextValue > Weapons.MAX_VALUE ) {
			throw new UnexpectedWarfareEntityProperty(
				this,
				property,
				UnexpectedWarfareEntityProperty.MESSAGES.MAX_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			throw new UnexpectedWarfareEntityProperty( this, property );
		}
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
		this._attack = value;
		
		try {
			this.checkProperty( value, UnexpectedWarfareEntityProperty.PROPERTIES.ATTACK );
		} catch ( e ) {
			this._attack = oldValue;
			throw e;
		}
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		try {
			this.checkProperty( value, UnexpectedWarfareEntityProperty.PROPERTIES.DODGE );
		} catch ( e ) {
			this._dodge = oldValue;
			throw e;
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		try {
			this.checkProperty( value, UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE );
		} catch ( e ) {
			this._damage = oldValue;
			throw e;
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		try {
			this.checkProperty( value, UnexpectedWarfareEntityProperty.PROPERTIES.HP );
		} catch ( e ) {
			this._hp = oldValue;
			throw e;
		}
	}
}