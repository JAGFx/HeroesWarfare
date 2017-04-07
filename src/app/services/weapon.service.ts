/**
 * Created by SMITHE on 14-Mar-17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Weapon } from '../components/weapons/weapon';
import { BaseService } from '../components/commons/base-service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeaponService extends BaseService<Weapon> {
	private _addWeaponEvent    = new Subject<Weapon>();
	private _deleteWeaponEvent = new Subject<Weapon>();
	
	public addWeaponEvent$    = this._addWeaponEvent.asObservable();
	public deleteWeaponEvent$ = this._deleteWeaponEvent.asObservable();
	
	constructor( _http: Http ) {
		super( _http );
	}
	
	protected BASE_PATH_ENTITY(): string {
		return super.BASE_PATH_ENTITY() + '/weapons';
	}
	
	/**
	 *
	 * @returns {Promise<Weapon[]>}
	 */
	public getWeapons(): Promise<Weapon[]> {
		const path     = this.BASE_PATH_ENTITY();
		const callback = response => response.json().data as Weapon;
		
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param id
	 * @returns {Promise<Weapon>}
	 */
	public getWeapon( id: string ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + id;
		const callback = response => this.makeObject( response.json().data );
		
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param weapon
	 * @returns {Promise<Weapon>}
	 */
	public putWeapon( weapon: Weapon ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = () => {
			this.announceNewWeapon( weapon );
			return this.makeObject( weapon );
		};
		
		return this.put( path, weapon.serialize(), callback );
	}
	
	/**
	 *
	 * @param weapon
	 * @returns {Promise<Weapon>}
	 */
	public postWeapon( weapon: Weapon ): Promise<Weapon> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = res => {
			this.announceNewWeapon( weapon );
			return this.makeObject( res.json().data );
		};
		
		return this.post( path, weapon.serialize(), callback );
	}
	
	/**
	 *
	 * @param weapon
	 * @returns {Promise<void>}
	 */
	public deleteWeapon( weapon: Weapon ): Promise<void> {
		const path     = this.BASE_PATH_ENTITY() + '/' + weapon.id;
		const callback = () => this.announceDeleteWeapon( weapon );
		
		return this.remove( path, callback );
	}
	
	public announceNewWeapon( weapon: Weapon ) {
		this._addWeaponEvent.next( weapon );
	}
	
	public announceDeleteWeapon( weapon: Weapon ) {
		this._deleteWeaponEvent.next( weapon );
	}
	
	/**
	 *
	 * @param weapon
	 * @returns {Weapon}
	 */
	public makeObject( weapon: Weapon ): Weapon {
		let w: Weapon = new Weapon();
		w.copyFrom( weapon );
		
		return w;
	}
	
	public static jsonStringify( weapon?: Weapon ): string {
		if ( !weapon )
			return null;
		
		let w: Weapon = new Weapon();
		w.copyFrom( weapon );
		return JSON.stringify( w.serialize() );
	}
	
	public static jsonParse( weapon: string ): Weapon {
		return JSON.parse( weapon ) as Weapon;
	}
}