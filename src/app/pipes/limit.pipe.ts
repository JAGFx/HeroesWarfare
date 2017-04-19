import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'limit'
} )
export class LimitPipe implements PipeTransform {
	
	transform( list: any[], max: number ): any {
		return list.slice( 0, max );
	}
}
