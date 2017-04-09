import { BaseEntity } from '../base-entity';
import { Weapon } from '../../weapons/weapon';
import { Hero } from '../../heroes/hero';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseEntityWarfare extends BaseEntity {
	public static readonly NB_PROPERTIES: number = 4;
	public static readonly COEF_RELATIVE_TO_ABSOLUTE = {
		ANY: {
			MIN: 1,
			MAX: 3
		},
		HP:  10
	};
	
	protected _name: string;
	protected _attack: number;
	protected _dodge: number;
	protected _damage: number;
	protected _hp: number;
	
	public copyFrom( entity: BaseEntityWarfare ): void {
		this._attack = 0;
		this._dodge  = 0;
		this._damage = 0;
		this._hp     = 0;
		
		this.id     = entity.id;
		this.name   = entity.name;
		this.attack = entity.attack;
		this.dodge  = entity.dodge;
		this.damage = entity.damage;
		this.hp     = entity.hp;
	}
	
	public serialize(): any {
		return {
			id:     this.id,
			name:   this.name,
			attack: this.attack,
			dodge:  this.dodge,
			damage: this.damage,
			hp:     this.hp
		};
	}
	
	public equal( entity: BaseEntityWarfare ): boolean {
		return this.id === entity.id &&
			this.name === entity.name &&
			this.attack === entity.attack &&
			this.dodge === entity.dodge &&
			this.damage === entity.damage &&
			this.hp === entity.hp
	}
	
	public abstract validateProperties(): boolean;
	
	protected abstract checkProperty( nextValue, property: string ): any;
	
	public sumProperties(): number {
		return this._attack + this._dodge + this._damage + this._hp;
	}
	
	public getPerformanceIndex(): number {
		return ( this.getAbsoluteAttack() + this.getAbsoluteDodge() + this.getAbsoluteDamage() + this.getAbsoluteHp() ) / BaseEntityWarfare.NB_PROPERTIES;
	}
	
	public abstract isHero(): boolean;
	
	public abstract  isWeapon(): boolean;
	
	public abstract getMaxValue(): number;
	
	public abstract getMinValue(): number;
	
	public abstract getMaxSum(): number;
	
	// ----------------------------------------------------------------------- GETTERS - Relative
	
	public abstract get name(): string ;
	
	public abstract get attack(): number ;
	
	public abstract get dodge(): number ;
	
	public abstract get damage(): number ;
	
	public abstract get hp(): number;
	
	// ----------------------------------------------------------------------- GETTERS - Absolute
	
	public abstract getAbsoluteAttack( de?: number ): number;
	
	public abstract getAbsoluteDodge( de?: number ): number;
	
	public abstract getAbsoluteDamage( de?: number ): number;
	
	public abstract getAbsoluteHp(): number;
	
	// ----------------------------------------------------------------------- SETTERS
	
	public abstract set name( value: string ) ;
	
	public abstract set attack( value: number ) ;
	
	public abstract set dodge( value: number );
	
	public abstract set damage( value: number ) ;
	
	public abstract set hp( value: number );
}