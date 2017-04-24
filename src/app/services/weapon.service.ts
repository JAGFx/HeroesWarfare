/**
 * Created by SMITHE on 14-Mar-17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../components/commons/base-service';
import { Weapon } from '../components/weapons/weapon';

/**
 *  Weapon service
 */
@Injectable()
export class WeaponService extends BaseService<Weapon> {
	
	constructor( _http: Http ) {
		super( _http );
	}
	
	protected BASE_PATH_ENTITY(): string {
		return super.BASE_PATH_ENTITY() + '/weapons';
	}
	
	// ----------------------------------------------------------------------- REST Method
	/**
	 * Get weapons
	 *
	 * @returns {Promise<Weapon[]>} List of Weapon
	 */
	public getWeapons(): Promise<Weapon[]> {
		const path     = this.BASE_PATH_ENTITY();
		const callback = response => response.json().data as Weapon;
		
		return this.get( path, callback );
	}
	
	/**
	 * Get specific weapon
	 *
	 * @param id ID of weapon
	 * @returns {Promise<Weapon>} Weapon
	 */
	public getWeapon( id: string ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + id;
		const callback = response => this.makeObject( response.json().data );
		
		return this.get( path, callback );
	}
	
	/**
	 * Update weapon
	 *
	 * @param weapon Weapon to update
	 * @returns {Promise<Weapon>} Weapon updated
	 */
	public putWeapon( weapon: Weapon ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = () => {
			this.announceNewEntity( weapon );
			return this.makeObject( weapon );
		};
		
		return this.put( path, weapon.serialize(), callback );
	}
	
	/**
	 * Add weapon
	 *
	 * @param weapon Weapon to add
	 * @returns {Promise<Weapon>} Weapon added
	 */
	public postWeapon( weapon: Weapon ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = res => {
			this.announceNewEntity( weapon );
			return this.makeObject( res.json().data );
		};
		
		return this.post( path, weapon.serialize(), callback );
	}
	
	/**
	 *  Weapon to remove
	 *
	 * @param weapon Weapon to remove
	 * @returns {Promise<void>}
	 */
	public deleteWeapon( weapon: Weapon ): Promise<void> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = () => this.announceDeleteEntity( weapon );
		
		return this.remove( path, callback );
	}
	
	/**
	 *  Search weapon with params
	 *
	 * @param property Property  where do the search
	 * @param value Term to search
	 * @returns {Promise<any>} List of Heroes corresponding to the search
	 */
	public search( property: string, value: any ): Promise<Weapon[]> {
		const path     = this.BASE_PATH_ENTITY() + '/?' + property + '=^' + ( Number( value ) || value );
		const callback = response => response.json().data as Weapon;
		
		return this.get( path, callback );
	}
	
	// ----------------------------------------------------------------------- SERVICE Method
	
	/**
	 * Create a TRUE Hero object
	 *
	 * @param weapon Object to convert
	 * @returns {Weapon} TRUE Hero object
	 */
	public makeObject( weapon: Weapon ): Weapon {
		let w: Weapon = new Weapon();
		w.copyFrom( weapon );
		
		return w;
	}
	
	/**
	 *  Stringify weapon
	 *
	 * @param weapon Weapon to stringify
	 * @returns {any} Weapon stringified
	 */
	public static jsonStringify( weapon?: Weapon ): string {
		if ( !weapon )
			return null;
		
		let w: Weapon = new Weapon();
		w.copyFrom( weapon );
		return JSON.stringify( w.serialize() );
	}
	
	/**
	 *  Parse string of weapon to object
	 *
	 * @param weapon String of weapon
	 * @returns {Weapon} Object weapon
	 */
	public static jsonParse( weapon: string ): Weapon {
		return JSON.parse( weapon ) as Weapon;
	}
}