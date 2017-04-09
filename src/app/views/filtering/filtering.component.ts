import { Component } from '@angular/core';

@Component( {
	selector:    'app-filtering',
	templateUrl: 'filtering.component.html'
} )
export class FilteringComponent {
	public filterForm           = {};
	public formIsShown: boolean = false;
	
	public validate() {
		console.log( this.filterForm );
	}
	
	public showForm() {
		this.formIsShown = true;
	}
	
	public hideForm() {
		this.formIsShown = false;
	}
	
}
