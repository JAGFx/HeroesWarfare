import { BaseEntity } from './base-entity';
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
	
	public abstract getMaxValue(): number;
	
	public abstract getMinValue(): number;
	
	public abstract getMaxSum(): number;
	
	// ----------------------------------------------------------------------- GETTERS
	
	public abstract get name(): string ;
	
	public abstract get attack(): number ;
	
	public abstract get dodge(): number ;
	
	public abstract get damage(): number ;
	
	public abstract get hp(): number;
	
	// ----------------------------------------------------------------------- SETTERS
	
	public abstract set name( value: string ) ;
	
	public abstract set attack( value: number ) ;
	
	public abstract set dodge( value: number );
	
	public abstract set damage( value: number ) ;
	
	public abstract set hp( value: number );
}