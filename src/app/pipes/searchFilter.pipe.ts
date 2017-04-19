import { Pipe, PipeTransform } from '@angular/core';
import { BaseEntityWarfare } from '../components/commons/warfareEntities/base-entity-warfare';

@Pipe( {
	name: 'searchFilter'
} )
export class SearchFilterPipe implements PipeTransform {
	
	transform( list: BaseEntityWarfare[], key: string, search ): BaseEntityWarfare[] {
		return ( list )
			? list.filter( ( item ) => {
				if ( item.hasOwnProperty( key ) ) {
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
