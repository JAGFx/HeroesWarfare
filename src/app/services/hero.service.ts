import { Hero } from '../components/heroes/hero';
import { Injectable, Injector } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Created by SMITHE on 10-Feb-17.
 */

@Injectable()
export class HeroService {
	private static readonly BASE_PATH = 'api/heroes';
	
	private _headers = new Headers( { 'Content-Type': 'application/json' } );
	/*private _http;*/
	
	/**
	 *
	 * @param _http
	 */
	constructor( private _http: Http ) {
	}
	
	/**
	 *
	 * @returns {Promise<Hero[]>}
	 */
	public getHeroes(): Promise<Hero[]> {
		return this._http.get( HeroService.BASE_PATH )
		           .toPromise()
		           .then( response => response.json().data as Hero[] )
		           .catch( this.handleError );
	}
	
	/**
	 *
	 * @param id
	 * @returns {Promise<Hero>}
	 */
	public getHero( id: number ): Promise<Hero> {
		return this._http.get( HeroService.BASE_PATH + '/' + id )
		           .toPromise()
		           .then( response => response.json().data as Hero )
		           .catch( this.handleError );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public putHero( hero: Hero ): Promise<Hero> {
		console.log( hero.serialize() );
		return this._http.put( HeroService.BASE_PATH + '/' + hero.id, hero.serialize(), { headers: this._headers } )
		           .toPromise()
		           .then( () => hero )
		           .catch( this.handleError );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<Hero>}
	 */
	public postHero( hero: Hero ): Promise<Hero> {
		return this._http.post( HeroService.BASE_PATH + '/' + hero.id, hero.serialize(), { headers: this._headers } )
		           .toPromise()
		           .then( res => res.json().data )
		           .catch( this.handleError );
	}
	
	/**
	 *
	 * @param hero
	 * @returns {Promise<void>}
	 */
	public deleteHero( hero: Hero ): Promise<void> {
		return this._http.delete( HeroService.BASE_PATH + '/' + hero.id, { headers: this._headers } )
		           .toPromise()
		           .then( () => null )
		           .catch( this.handleError );
	}
	
	/**
	 *
	 * @param error
	 * @returns {Promise<never>}
	 */
	private handleError( error: any ): Promise<any> {
		console.error( 'An error occurred', error ); // for demo purposes only
		return Promise.reject( error.message || error );
	}
}