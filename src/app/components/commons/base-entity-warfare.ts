import { BaseEntity } from './base-entity';
import { UnexpectedWarfareEntityProperty } from './base-entity-warfare-exception';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseEntityWarfare extends BaseEntity {
	protected static readonly NB_PROPERTIES: number = 4;
	
	protected _name: string;
	protected _attack: number;
	protected _dodge: number;
	protected _damage: number;
	protected _hp: number;
	
	constructor( id?: string, name?: string ) {
		super();
		
		this._id   = id || BaseEntityWarfare.generateUUID();
		this._name = name || '';
	}
	
	public copyFrom( entity: BaseEntityWarfare ) {
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
	
	protected abstract validateProperties(): boolean;
	
	public sumProperties(): number {
		return this._attack + this._dodge + this._damage + this._hp;
	}
	
	// ----------------------------------------------------------------------- GETTERS
	
	public get name(): string {
		return this._name;
	}
	
	abstract get attack(): number {
		return this._attack;
	}
	
	abstract get dodge(): number {
		return this._dodge;
	}
	
	abstract get damage(): number {
		return this._damage;
	}
	
	abstract get hp(): number {
		return this._hp;
	}
	
	// ----------------------------------------------------------------------- SETTERS
	
	public set name( value: string ) {
		this._name = value;
	}
	
	abstract set attack( value: number );
	
	abstract set dodge( value: number );
	
	abstract set damage( value: number );
	
	abstract set hp( value: number );
}