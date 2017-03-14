import { BaseEntityWarfare } from '../commons/base-entity-warfare';
import { UnexpectedWarfareEntityProperty as HeroException } from '../commons/base-entity-warfare-exception';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero extends BaseEntityWarfare {
	public static readonly MIN_VALUE: number = 1;
	public static readonly MAX_SUM: number   = 40;
	
	protected _name: string;
	protected _attack: number = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _dodge: number  = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _damage: number = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	protected _hp: number     = Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	
	constructor( id?: string, name?: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		super();
		
		this._id    = id || Hero.generateUUID();
		this._name  = name || '';
		this.attack = attack || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.dodge  = dodge || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.damage = damage || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
		this.hp     = hp || Hero.MAX_SUM / BaseEntityWarfare.NB_PROPERTIES;
	}
	
	protected validateProperties(): boolean {
		//console.log( this );
		//console.log( this.name, this.attack, this.dodge, this.damage, this.hp );
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
		return null;
	}
	
	public getMinValue(): number {
		return Hero.MIN_VALUE;
	}
	
	public getMaxSum(): number {
		return Hero.MAX_SUM;
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
			this.checkProperty( value, HeroException.PROPERTIES.ATTACK );
		} catch ( e ) {
			this._attack = oldValue;
			throw e;
		}
		
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.DODGE );
		} catch ( e ) {
			this._dodge = oldValue;
			throw e;
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.DAMAGE );
		} catch ( e ) {
			this._damage = oldValue;
			throw e;
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		try {
			this.checkProperty( value, HeroException.PROPERTIES.HP );
		} catch ( e ) {
			this._hp = oldValue;
			throw e;
		}
	}
}
