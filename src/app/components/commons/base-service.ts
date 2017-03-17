/**
 * Created by SMITHE on 14-Mar-17.
 */
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
	protected static readonly BASE_PATH = 'api';
	protected _headers                  = new Headers( { 'Content-Type': 'application/json' } );
	
	/**
	 *
	 * @param _http
	 */
	constructor( private _http: Http ) {
	}
	
	// ----------------------------------------------------------------------- REST METHODS
	
	/**
	 *
	 * @param path
	 * @param callback
	 * @returns {Promise<TResult|T>}
	 */
	public get( path, callback ) {
		let ob = this._http.get( path );
		
		return this.process( ob, callback );
	}
	
	/**
	 *
	 * @param path
	 * @param data
	 * @param callback
	 * @returns {Promise<TResult|T>}
	 */
	public put( path, data, callback ): Promise<T> {
		let ob = this._http.put( path, data, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	/**
	 *
	 * @param path
	 * @param data
	 * @param callback
	 * @returns {Promise<TResult|T>}
	 */
	public post( path, data, callback ): Promise<T> {
		let ob = this._http.post( path, data, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	/**
	 *
	 * @param path
	 * @param callback
	 * @returns {Promise<TResult|T>}
	 */
	public remove( path, callback ): Promise<void> {
		let ob = this._http.delete( path, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	
	// ----------------------------------------------------------------------- CLASS METHODS
	
	/**
	 *
	 * @returns {string}
	 * @constructor
	 */
	protected BASE_PATH_ENTITY(): string {
		return BaseService.BASE_PATH;
	}
	
	/**
	 *
	 * @param observable
	 * @param callback
	 * @returns {Promise<TResult|T>}
	 */
	protected process( observable: Observable<Response>, callback ) {
		return observable
			.toPromise()
			.then( callback )
			.catch( this.handleError );
	}
	
	/**
	 *
	 * @param error
	 * @returns {Promise<never>}
	 */
	protected handleError( error: any ): Promise<any> {
		console.error( 'An error occurred', error ); // for demo purposes only
		return Promise.reject( error.message || error );
	}
}