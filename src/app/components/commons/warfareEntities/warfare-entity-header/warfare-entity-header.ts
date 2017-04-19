/**
 * Created by emsm on 19/03/2017.
 */

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseEntityWarfare } from '../base-entity-warfare';

@Component( {
	selector:    'warfare-entity-header',
	templateUrl: 'warfare-entity-header.html',
} )

export class WarfareEntityHeaderComponent implements OnInit, OnChanges {
	@Input()
	public entity: BaseEntityWarfare;
	
	@Input()
	public options: any = {
		actionBtn: true,
		cardView:  false
	};
	
	public showAbsoluteValueProperties: boolean = false;
	
	
	ngOnInit(): void {
	}
	
	
	ngOnChanges( changes: SimpleChanges ): void {
		console.log( 'CHANGES', changes );
	}
}