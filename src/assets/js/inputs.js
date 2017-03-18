/**
 * Created by emsm on 17/03/2017.
 */

(function () {

	console.log( 'Ready' );

	// TODO: Create Directive Angular2 with event handler
	$( '.form-control' )
		.focus( function () {
			console.log( 'plop' );
			$( this )
				.parents( '.form-group' )
				.find( 'label' )
				.addClass( 'moving focused' );
		} )
		.blur( function () {
			var label = $( this )
				.parents( '.form-group' )
				.find( 'label' );

			if ( $( this ).val() == '' )
				label.removeClass( 'moving focused' );
			else
				label.removeClass( 'focused' );
		} );
})( jQuery );