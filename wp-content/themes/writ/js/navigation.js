/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
console.log('navigation script loading')

	var container = document.getElementsByClassName( 'main-navigation' )[0],
	    button    = container.getElementsByTagName( 'h1' )[0],
	    menu      = container.getElementsByTagName( 'ul' )[0];

		console.log('container found:' + undefined == container );
		console.log('button found:' + undefined == button );
		console.log('menu found:' + undefined == menu );


	if ( undefined == button || undefined == menu )
		return false;

	button.onclick = function() {
		if ( -1 == menu.className.indexOf( 'nav-menu' ) )
			menu.className = 'nav-menu';

		if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
			button.className = button.className.replace( ' toggled-on', '' );
			menu.className = menu.className.replace( ' toggled-on', '' );
			container.className = container.className.replace( ' toggled-on', '' );
		} else {
			button.className += ' toggled-on';
			menu.className += ' toggled-on';
			container.className += ' toggled-on';
		}
	};

	// Hide menu toggle button if menu is empty.
	if ( ! menu.childNodes.length )
		button.style.display = 'none';
} )();
