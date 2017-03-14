import { BaseEntityWarfare } from '../commons/warfareEntities/base-entity-warfare';
import { UnexpectedWarfareEntityProperty as WeaponException } from '../commons/warfareEntities/base-entity-warfare-exception';
/**
 * Created by emsm on 13/03/2017.
 */

export class Weapon extends BaseEntityWarfare {
	public static readonly MIN_VALUE: number = -5;
	public static readonly MAX_VALUE: number = 5;
	public static readonly MAX_SUM: number        = 40;
	public static readonly SUM_PROPERTIES: number = 0;
	
	protected _name: string;
	protected _attack: number                     = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
	protected _dodge: number                      = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
	protected _damage: number                     = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
	protected _hp: number                         = (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
	
	constructor( id?: string, name?: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		super();
		
		this._id    = id || Weapon.generateUUID();
		this._name  = name || '';
		this.attack = attack || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
		this.dodge  = dodge || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
		this.damage = damage || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
		this.hp     = hp || (Weapon.MIN_VALUE + Weapon.MAX_VALUE) / 2;
	}
	
	protected validateProperties(): boolean {
		return this.sumProperties() === Weapon.SUM_PROPERTIES;
	}
	
	protected checkProperty( nextValue, property: string ): any {
		if ( nextValue < Weapon.MIN_VALUE )
			throw new WeaponException(
				this,
				property,
				WeaponException.MESSAGES.MIN_VALUE
			);
		
		if ( nextValue > Weapon.MAX_VALUE )
			throw new WeaponException(
				this,
				property,
				WeaponException.MESSAGES.MAX_VALUE
			);
		
		// FIXME ValidateProperties
		/*if ( !this.validateProperties() )
		 throw new WeaponException( this, property );*/
		
	}
	
	public getMaxValue(): number {
		return Weapon.MAX_VALUE;
	}
	
	public getMinValue(): number {
		return Weapon.MIN_VALUE;
	}
	
	public getMaxSum(): number {
		return Weapon.MAX_SUM;
	}
	
	// ----------------------------------------------------------------------- GETTERS
	
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
	
	public set name( value: string ) {
		this._name = value;
	}
	
	public set attack( value: number ) {
		const oldValue: number = this._attack;
		this._attack = value;
		
		try {
			this.checkProperty( value, WeaponException.PROPERTIES.ATTACK );
		} catch ( e ) {
			this._attack = oldValue;
			throw e;
		}
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		try {
			this.checkProperty( value, WeaponException.PROPERTIES.DODGE );
		} catch ( e ) {
			this._dodge = oldValue;
			throw e;
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		try {
			this.checkProperty( value, WeaponException.PROPERTIES.DAMAGE );
		} catch ( e ) {
			this._damage = oldValue;
			throw e;
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		try {
			this.checkProperty( value, WeaponException.PROPERTIES.HP );
		} catch ( e ) {
			this._hp = oldValue;
			throw e;
		}
	}
}