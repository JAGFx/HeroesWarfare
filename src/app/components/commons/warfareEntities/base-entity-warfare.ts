import { BaseEntity } from '../base-entity';
/**
 * Created by SMITHE on 13-Mar-17.
 */

/**
 * Base use for warfare entities
 */
export abstract class BaseEntityWarfare extends BaseEntity {
	
	/**
	 * @type {number} Number of properties
	 */
	public static readonly NB_PROPERTIES: number     = 4;
	
	/**
	 * @type {string} Path to binaries (Warfare pictures)
	 */
	public static readonly BASE_PATH_BIN             = '../bin/';
	
	/**
	 * @type {any} Coef use for process performance index
	 */
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
	protected _pic: string;
	
	// ----------------------------------------------------------------------- BaseEntity implementation
	constructor( name: string ) {
		super();
		this.name = name;
	}
	
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
			hp:     this.hp,
			pic:    this.pic
		};
	}
	
	public equal( entity: BaseEntityWarfare ): boolean {
		return this.id === entity.id &&
			this.name === entity.name &&
			this.attack === entity.attack &&
			this.dodge === entity.dodge &&
			this.damage === entity.damage &&
			this.hp === entity.hp &&
			this.pic === entity.pic
	}
	
	// ----------------------------------------------------------------------- Class methods
	
	/**
	 * Return if the entity have a correct properties
	 *
	 *  @return {boolean} True if correct
	 */
	public abstract validateProperties(): boolean;
	
	/**
	 *  Check if all properties of entity are correct
	 *
	 * @param nextValue the new value to set in property
	 * @param property Name of property to assign value
	 */
	protected abstract checkProperty( nextValue, property: string ): any;
	
	/**
	 * Get sum of properties
	 *
	 * @returns {number} Sum of properties
	 */
	public sumProperties(): number {
		return this._attack + this._dodge + this._damage + this._hp;
	}
	
	/**
	 *  Get performance index of entity ( Number to evaluate the performance of entity )
	 *
	 * @returns {number} Performance index
	 */
	public getPerformanceIndex(): number {
		return ( this.getAbsoluteAttack() + this.getAbsoluteDodge() + this.getAbsoluteDamage() + this.getAbsoluteHp() ) / BaseEntityWarfare.NB_PROPERTIES;
	}
	
	/**
	 * Update pic with the current name of entity
	 */
	public updatePic() {
		this._pic = this.name.replace( /\s/g, '_' );
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
	
	public abstract get pic(): string;

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