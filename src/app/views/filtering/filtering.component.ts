import { Component } from '@angular/core';

@Component( {
	selector:    'app-filtering',
	templateUrl: 'filtering.component.html'
} )
export class FilteringComponent {
	public filterForm = {};
	
	public validate() {
		console.log( this.filterForm );
	}
	
}
