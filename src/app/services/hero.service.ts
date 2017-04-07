import { Hero } from '../components/heroes/hero';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { BaseService } from '../components/commons/base-service';
import { Http } from '@angular/http';
import { WeaponService } from './weapon.service';

/**
 * Created by SMITHE on 10-Feb-17.
 */

@Injectable()
export class HeroService extends BaseService<Hero> {
	
	constructor( _http: Http, private _weaponService: WeaponService ) {
		super( _http );
	}
	
	protected BASE_PATH_ENTITY(): string {
		return super.BASE_PATH_ENTITY() + '/heroes';
	}
	
	/**
	 *
	 * @returns {Promise<Hero[]>}
	 */
	public getHeroes(): Promise<Hero[]> {
		const path     = this.BASE_PATH_ENTITY();
		const callback = response => response.json().data as Hero;
		
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param id
	 * @returns {Promise<Hero>}
	 */
	public getHero( id: string ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + id;
		const callback = response => this.makeObject( response.json().data );
		
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public putHero( hero: Hero ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = () => {
			this.announceNewEntity( hero );
			return this.makeObject( hero );
		};
		
		return this.put( path, hero.serialize(), callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public postHero( hero: Hero ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = res => {
			this.announceNewEntity( hero );
			return this.makeObject( res.json().data );
		};
		
		return this.post( path, hero.serialize(), callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<void>}
	 */
	public deleteHero( hero: Hero ): Promise<void> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = () => this.announceDeleteEntity( hero );
		
		return this.remove( path, callback );
	}
	
	public makeObject( hero: Hero ): Hero {
		let h: Hero = new Hero();
		h.copyFrom( hero );
		
		if ( h.weapon )
			h.weapon = this._weaponService.makeObject( h.weapon );
		
		return h;
	}
}