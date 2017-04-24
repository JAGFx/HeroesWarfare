/**
 * Created by emsm on 19/03/2017.
 */

import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive( { selector: '[flatizer-label-form]' } )

/**
 * Directive to custom form UI
 */
export class FlatizerLabelFormDirective implements AfterViewInit {
	
	constructor( private _el: ElementRef ) {
		console.log( this._el );
	}
	
	/**
	 * Code to execute when app are ready
	 */
	ngAfterViewInit(): void {
		$( '.form-control' )
			.focus( function () {
				$( this )
					.parents( '.form-group' )
					.find( 'label' )
					.addClass( 'moving focused' );
			} )
			.blur( function () {
				const label = $( this )
					.parents( '.form-group' )
					.find( 'label' );
				
				if ( $( this ).val() === '' )
					label.removeClass( 'moving focused' );
				else
					label.removeClass( 'focused' );
			} )
			.each( labelToInitialPosition );
		
		function labelToInitialPosition( index, value ) {
			console.log( index, $( this ).val(), $( this ).is( ':empty' ) );
			
			if ( $( this ).val() )
				$( this )
					.parents( '.form-group' )
					.find( 'label' )
					.addClass( 'moving' );
		}
	}
}