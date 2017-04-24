import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'limit'
} )

/**
 * Pipe to show the only firsts entity of list
 */
export class LimitPipe implements PipeTransform {
	
	/**
	 * List shortened to max number of entity
	 *
	 * @param list List to short
	 * @param max Max number of entity
	 * @returns {any[]} List shortened to max number of entity
	 */
	transform( list: any[], max: number ): any {
		return list.slice( 0, max );
	}
}
