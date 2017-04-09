import { BaseEntityWarfare } from '../commons/warfareEntities/base-entity-warfare';
import { UnexpectedWarfareEntityProperty as HeroException } from '../commons/warfareEntities/base-entity-warfare-exception';
import { Weapon } from '../weapons/weapon';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero extends BaseEntityWarfare {
	public static readonly MAX_SUM: number                        = 40;
	public static readonly MIN_VALUE: number                      = 1;
	public static readonly MAX_VALUE: number                      = Hero.MAX_SUM;
	public static readonly RATIO_IMPACT_WEAPON_PERF_INDEX: number = 0.3;
	
	protected _name: string;
	protected _attack: number = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _dodge: number  = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _damage: number = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _hp: number     = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	private _weapon: Weapon;
	
	constructor( id?: string, name?: string, attack?: number, dodge?: number, damage?: number, hp?: number, weapon?: Weapon ) {
		super();
		
		this._id    = id || Hero.generateUUID();
		this._name  = name || '';
		this.attack = attack || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.dodge  = dodge || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.damage = damage || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.hp     = hp || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.weapon = weapon || null;
	}
	
	public validateProperties(): boolean {
		return ( this.sumProperties() ) <= Hero.MAX_SUM;
	}
	
	protected checkProperty( nextValue, property: string ): any {
		if ( nextValue < Hero.MIN_VALUE )
			throw new HeroException(
				this,
				property,
				HeroException.MESSAGES.MIN_VALUE
			);
		
		if ( !this.validateProperties() )
			throw new HeroException( this, property );
		
	}
	
	public getMaxValue(): number {
		return Hero.MAX_VALUE;
	}
	
	public getMinValue(): number {
		return Hero.MIN_VALUE;
	}
	
	public getMaxSum(): number {
		return Hero.MAX_SUM;
	}
	
	public isHero(): boolean {
		return this instanceof Hero;
	}
	
	public isWeapon(): boolean {
		return this instanceof Weapon;
	}
	
	
	public serialize(): any {
		let superSerialized = super.serialize();
		let w: Weapon       = new Weapon();
		
		if ( this.weapon )
			w.copyFrom( this.weapon );
		
		superSerialized.weapon = w.serialize();
		
		return superSerialized;
	}
	
	public equal( entity: Hero ): boolean {
		return super.equal( entity ) && entity.weapon.equal( this.weapon );
	}
	
	
	public copyFrom( entity: Hero ) {
		super.copyFrom( entity );
		this.weapon = entity.weapon;
	}
	
	public getPerformanceIndex(): number {
		return ( this.weapon )
			? super.getPerformanceIndex() - this.weapon.getPerformanceIndex() * Hero.RATIO_IMPACT_WEAPON_PERF_INDEX
			: super.getPerformanceIndex();
	}

// ----------------------------------------------------------------------- GETTERS - Relative
	
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
	
	public get weapon(): Weapon {
		return this._weapon;
	}

// ----------------------------------------------------------------------- GETTERS - Absolute
	
	
	public getAbsoluteAttack( de?: number ): number {
		let coef: number = de || BaseEntityWarfare.COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
		return this.attack * coef;
	}
	
	public getAbsoluteDodge( de?: number ): number {
		let coef: number = de || BaseEntityWarfare.COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
		
		return this.dodge * coef;
	}
	
	public getAbsoluteDamage( de?: number ): number {
		let coef: number = de || BaseEntityWarfare.COEF_RELATIVE_TO_ABSOLUTE.ANY.MIN;
		
		return this.damage * coef;
	}
	
	public getAbsoluteHp(): number {
		return this.hp * BaseEntityWarfare.COEF_RELATIVE_TO_ABSOLUTE.HP;
	}

// ----------------------------------------------------------------------- SETTERS
	
	public set name( value: string ) {
		this._name = value;
	}
	
	public set attack( value: number ) {
		const oldValue: number = this._attack;
		this._attack           = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.ATTACK );
		}
		catch ( e ) {
			this._attack = oldValue;
			throw e;
		}
		
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.DODGE );
		}
		catch ( e ) {
			this._dodge = oldValue;
			throw e;
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.DAMAGE );
		}
		catch ( e ) {
			this._damage = oldValue;
			throw e;
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.HP );
		}
		catch ( e ) {
			this._hp = oldValue;
			throw e;
		}
	}
	
	public set weapon( value: Weapon ) {
		this._weapon = value;
	}
}
