/**
 * Created by SMITHE on 14-Mar-17.
 */
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

/**
 * Class use by all services. Provide commons method to interact with a REST API
 */
export abstract class BaseService<T> {
	
	/**
	 * Base URL of API
	 *
	 * @type {string}
	 */
	protected static readonly BASE_PATH = 'api';
	
	/**
	 *  Common header sent in each request
	 *
	 * @type {Headers}
	 */
	protected _headers                  = new Headers( { 'Content-Type': 'application/json' } );
	
	protected _addEntityEvent    = new Subject<T>();
	protected _deleteEntityEvent = new Subject<T>();
	
	/**
	 * Observable to announce new entity added
	 *
	 * @type {Observable<T>}
	 */
	public addEntityEvent$    = this._addEntityEvent.asObservable();
	
	/**
	 * Observable to announce new entity removing
	 *
	 * @type {Observable<T>}
	 */
	public deleteEntityEvent$ = this._deleteEntityEvent.asObservable();
	
	/**
	 *
	 * @param _http
	 */
	constructor( protected _http: Http ) {
	}
	
	// ----------------------------------------------------------------------- REST METHODS
	
	/**
	 * Method to execute GET request
	 *
	 * @param {string} path Resource URL
	 * @param callback Function call after the request processing
	 * @returns {Promise<T>}
	 */
	public get( path, callback ) {
		let ob = this._http.get( path );
		
		return this.process( ob, callback );
	}
	
	/**
	 * Method to execute PUT request
	 *
	 * @param {string} path Resource URL
	 * @param data Datas to pass with request
	 * @param callback Function call after the request processing
	 * @returns {Promise<T>}
	 */
	public put( path, data, callback ): Promise<T> {
		let ob = this._http.put( path, data, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	/**
	 * Method to execute POST request
	 *
	 * @param {string} path Resource URL
	 * @param data Datas to pass with request
	 * @param callback Function call after the request processing
	 * @returns {Promise<T>}
	 */
	public post( path, data, callback ): Promise<T> {
		let ob = this._http.post( path, data, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	/**
	 * Method to execute DELETE request
	 *
	 * @param {string} path Resource URL
	 * @param callback Function call after the request processing
	 * @returns {Promise<void>}
	 */
	public remove( path, callback ): Promise<void> {
		let ob = this._http.delete( path, { headers: this._headers } );
		
		return this.process( ob, callback );
	}
	
	
	// ----------------------------------------------------------------------- CLASS METHODS
	/**
	 * Emit new event for announce adding Entity
	 *
	 * @param {T} entity Entity added
	 */
	public announceNewEntity( entity: T ) {
		console.warn( entity );
		this._addEntityEvent.next( entity );
	}
	
	/**
	 * Emit new event for announce removing Entity
	 *
	 * @param {T} entity Entity removed
	 */
	public announceDeleteEntity( entity: T ) {
		this._deleteEntityEvent.next( entity );
	}
	
	/**
	 * Get the relative path of current service
	 *
	 * @returns {string} Relative path
	 * @constructor
	 */
	protected BASE_PATH_ENTITY(): string {
		return BaseService.BASE_PATH;
	}
	
	/**
	 * Convert observable & call callback
	 *
	 * @param observable Observable of request
	 * @param callback Function call after the request processing
	 * @returns {Promise<T|void>}
	 */
	protected process( observable: Observable<Response>, callback ) {
		return observable
			.toPromise()
			.then( callback )
			.catch( this.handleError );
	}
	
	/**
	 * Handle error in request
	 *
	 * @param error Error handled
	 * @returns {Promise<never>}
	 */
	protected handleError( error: any ): Promise<any> {
		console.error( 'An error occurred', error ); // for demo purposes only
		return Promise.reject( error.message || error );
	}
}