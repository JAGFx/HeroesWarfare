import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BaseService } from '../components/commons/base-service';
import { Hero } from '../components/heroes/hero';
import { WeaponService } from './weapon.service';

/**
 * Created by SMITHE on 10-Feb-17.
 */

/**
 * Hero service
 */
@Injectable()
export class HeroService extends BaseService<Hero> {
	
	constructor( _http: Http, private _weaponService: WeaponService ) {
		super( _http );
	}
	
	protected BASE_PATH_ENTITY(): string {
		return super.BASE_PATH_ENTITY() + '/heroes';
	}
	
	// ----------------------------------------------------------------------- REST Method
	
	/**
	 * Get all heroes
	 * @returns {Promise<Hero[]>} List of Heroes
	 */
	public getHeroes(): Promise<Hero[]> {
		const path     = this.BASE_PATH_ENTITY();
		const callback = response => response.json().data as Hero;
		
		return this.get( path, callback );
	}
	
	/**
	 * Get specific hero
	 *
	 * @param id ID of Hero
	 * @returns {Promise<Hero>} Hero
	 */
	public getHero( id: string ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + id;
		const callback = response => this.makeObject( response.json().data );
		
		return this.get( path, callback );
	}
	
	/**
	 * Update new hero
	 *
	 * @param hero Hero to update
	 * @returns {Promise<Hero>} Hero updated
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
	 * Add new hero
	 *
	 * @param hero Hero to add
	 * @returns {Promise<Hero>} Hero added
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
	 *  Delete heroe
	 *
	 * @param hero Hero to delete
	 * @returns {Promise<void>}
	 */
	public deleteHero( hero: Hero ): Promise<void> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = () => this.announceDeleteEntity( hero );
		
		return this.remove( path, callback );
	}
	
	/**
	 *  Search hero with params
	 *
	 * @param property Property  where do the search
	 * @param value Term to search
	 * @returns {Promise<any>} List of Heroes corresponding to the search
	 */
	public search( property: string, value: any ): Promise<Hero[]> {
		const path     = this.BASE_PATH_ENTITY() + '/?' + property + '=^' + ( Number( value ) || value );
		const callback = response => response.json().data as Hero;
		
		return this.get( path, callback );
	}
	
	
	// ----------------------------------------------------------------------- SERVICE Method
	/**
	 * Create a TRUE Hero object
	 *
	 * @param hero Object to convert
	 * @returns {Hero} TRUE Hero object
	 */
	public makeObject( hero: Hero ): Hero {
		let h: Hero = new Hero();
		h.copyFrom( hero );
		
		if ( h.weapon )
			h.weapon = this._weaponService.makeObject( h.weapon );
		
		return h;
	}
}