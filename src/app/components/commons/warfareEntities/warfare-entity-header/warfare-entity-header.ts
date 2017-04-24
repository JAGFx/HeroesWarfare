/**
 * Created by emsm on 19/03/2017.
 */

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseEntityWarfare } from '../base-entity-warfare';

@Component( {
	selector:    'warfare-entity-header',
	templateUrl: 'warfare-entity-header.html',
} )

export class WarfareEntityHeaderComponent {
	
	/**
	 * Entity to use in WarfareEntityHeaderComponent
	 */
	@Input()
	public entity: BaseEntityWarfare;
	
	/**
	 * Option to configure the component
	 * @type {any}
	 */
	@Input()
	public options: any = {
		actionBtn: true,
		cardView:  false
	};
	
	/**
	 * Show absolute value or not of the current entity
	 *
	 * @type {boolean}
	 */
	public showAbsoluteValueProperties: boolean = false;
}