import { Pipe, PipeTransform } from '@angular/core';
import { BaseEntityWarfare } from '../components/commons/warfareEntities/base-entity-warfare';

@Pipe( {
	name: 'searchFilter'
} )

/**
 *  Pipe to  do a search in list of entity
 */
export class SearchFilterPipe implements PipeTransform {
	
	/**
	 *  Search in list of entity
	 * @param list List where do the search
	 * @param key Property of entity
	 * @param search Term to search
	 * @returns {BaseEntityWarfare[]|Array} Entity match with search and property
	 */
	transform( list: BaseEntityWarfare[], key: string, search ): BaseEntityWarfare[] {
		return ( list )
			? list.filter( ( item ) => {
				if ( item.hasOwnProperty( key ) || item.hasOwnProperty( '_' + key ) ) {
					if ( search ) {
						let regExp = new RegExp( '\\b' + search, 'gi' );
						return regExp.test( item[ key ] );
					} else {
						return true;
					}
				} else {
					return false;
				}
			} )
			: [];
	}
}
