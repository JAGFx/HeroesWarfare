import { Hero } from '../components/heroes/hero';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { BaseService } from '../components/commons/base-service';
import { Http } from '@angular/http';
import { WeaponService } from './weapon.service';
import { Weapon } from '../components/weapons/weapon';
import { forEach } from '@angular/router/src/utils/collection';

/**
 * Created by SMITHE on 10-Feb-17.
 */

@Injectable()
/* FIXME: Bug add hero & weapon. Invalid properties */
export class HeroService extends BaseService<Hero> {
	constructor( _http: Http ) {
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
		const callback = response => {
			/*let hSResponse : Hero[] = response.json().data as Hero[];
			 let hS : Hero[] = [];
			 
			 console.log( hSResponse );
			 
			 for( let h of hSResponse ){
			 hS.push( this.makeObject( h ) );
			 }
			 
			 
			 return hS;*/
			return response.json().data as Hero;
		};
		
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param id
	 * @returns {Promise<Hero>}
	 */
	public getHero( id: number ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + id;
		const callback = response => this.makeObject( response.json().data as Hero );
		return this.get( path, callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public putHero( hero: Hero ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = () => hero;
		
		return this.put( path, hero.serialize(), callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public postHero( hero: Hero ): Promise<Hero> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = res => res.json().data;
		
		return this.post( path, hero.serialize(), callback );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<void>}
	 */
	public deleteHero( hero: Hero ): Promise<void> {
		const path     = this.BASE_PATH_ENTITY() + '/' + hero.id;
		const callback = () => null;
		
		return this.remove( path, callback );
	}
	
	public makeObject( hero: Hero ): Hero {
		let h: Hero = new Hero();
		h.copyFrom( hero );
		
		if ( h.weapon ) {
			let w: Weapon = new Weapon();
			w.copyFrom( h.weapon );
			h.weapon = w;
		}
		
		return h;
	}
}