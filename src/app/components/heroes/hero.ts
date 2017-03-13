import { BaseEntityWarfare } from '../commons/base-entity-warfare';
import { UnexpectedWarfareEntityProperty } from '../commons/base-entity-warfare-exception';
/**
 * Created by SMITHE on 10-Feb-17.
 */

export class Hero extends BaseEntityWarfare {
	public static readonly MIN_VALUE: number      = 1;
	public static readonly MAX_SUM: number        = 40;
	
	protected _id: string;
	protected _attack: number = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	protected _dodge: number  = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	protected _damage: number = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	protected _hp: number     = Hero.MAX_SUM / Hero.NB_PROPERTIES;
	
	constructor( id?: string, name?: string, attack?: number, dodge?: number, damage?: number, hp?: number ) {
		super( id, name );
		
		this.attack = attack || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.dodge  = dodge || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.damage = damage || Hero.MAX_SUM / Hero.NB_PROPERTIES;
		this.hp     = hp || Hero.MAX_SUM / Hero.NB_PROPERTIES;
	}
	
	protected validateProperties(): boolean {
		//console.log( this );
		//console.log( this.name, this.attack, this.dodge, this.damage, this.hp );
		return ( this.sumProperties() ) <= Hero.MAX_SUM;
	}
	
	// ----------------------------------------------------------------------- SETTERS
	
	public set attack( value: number ) {
		const oldValue: number = this._attack;
		this._attack           = value;
		
		if ( this._attack < Hero.MIN_VALUE ) {
			this._attack = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>(
				UnexpectedWarfareEntityProperty.PROPERTIES.DODGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._attack = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>( UnexpectedWarfareEntityProperty.PROPERTIES.ATTACK );
		}
	}
	
	public set dodge( value: number ) {
		const oldValue: number = this._dodge;
		this._dodge            = value;
		
		if ( this._dodge < Hero.MIN_VALUE ) {
			this._dodge = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>(
				UnexpectedWarfareEntityProperty.PROPERTIES.DODGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._dodge = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>( UnexpectedWarfareEntityProperty.PROPERTIES.DODGE );
		}
	}
	
	public set damage( value: number ) {
		const oldValue: number = this._damage;
		this._damage           = value;
		
		if ( this._damage < Hero.MIN_VALUE ) {
			this._damage = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>(
				UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._damage = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>( UnexpectedWarfareEntityProperty.PROPERTIES.DAMAGE );
		}
	}
	
	public set hp( value: number ) {
		const oldValue: number = this._hp;
		this._hp               = value;
		
		if ( this._hp < Hero.MIN_VALUE ) {
			this._hp = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>(
				UnexpectedWarfareEntityProperty.PROPERTIES.HP,
				UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE
			);
		}
		
		if ( !this.validateProperties() ) {
			this._hp = oldValue;
			throw new UnexpectedWarfareEntityProperty<Hero>( UnexpectedWarfareEntityProperty.PROPERTIES.HP );
		}
	}
}
