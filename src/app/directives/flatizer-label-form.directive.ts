/**
 * Created by emsm on 19/03/2017.
 */

import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive( { selector: '[flatizer-label-form]' } )

export class FlatizerLabelFormDirective implements AfterViewInit {
	
	constructor( private _el: ElementRef ) {
		console.log( this._el );
	}
	
	ngAfterViewInit(): void {
		$( '.form-control' )
			.focus( function () {
				$( this )
					.parents( '.form-group' )
					.find( 'label' )
					.addClass( 'moving focused' );
			} )
			.blur( function () {
				let label = $( this )
					.parents( '.form-group' )
					.find( 'label' );
				
				if ( $( this ).val() == '' )
					label.removeClass( 'moving focused' );
				else
					label.removeClass( 'focused' );
			} )
			.each( labelToInitialPosition );
		
		function labelToInitialPosition( index, value ) {
			console.log( index, $( this ).val(), $( this ).is( ":empty" ) );
			
			if ( $( this ).val() )
				$( this )
					.parents( '.form-group' )
					.find( 'label' )
					.addClass( 'moving' );
		}
	}
}