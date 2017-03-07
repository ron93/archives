var Menu = (function() {
	
	var $container = $( '#mn-container' ),						
		$cover = $container.find( 'div.mn-cover' ),
		$middle = $container.find( 'div.mn-middle' ),
		$right = $container.find( 'div.mn-right' ),
		$open = $cover.find('a.mn-button-open'),
		$close = $right.find('span.mn-close'),
		$details = $container.find( 'a.mn-viewdetails' ),

        
            //event for opening/closing menu and showing modal(details)

		init = function() {

			initEvents();

		},
		initEvents = function() {

			$open.on( 'click', function( event ) {

				openMenu();
				return false;

			} );

			$close.on( 'click', function( event ) {

				closeMenu();
				return false;

			} );

			$details.on( 'click', function( event ) {

				$container.removeClass( 'mn-in' ).children( 'div.mn-modal' ).remove();
				viewDetails( $( this ) );
				return false;

			} );
			
		},
        
            //function that adds class(.mn-open) to container to open menu

		openMenu = function() {

			$container.addClass( 'mn-open' );

		},
        
            //function that removes classes() to container to close menu

		closeMenu = function() {

			$container.removeClass( 'mn-open mn-nodelay mn-in' );

		},
        
            //to show menu item details

		viewDetails = function( recipe ) {

			var title = recipe.text(),
				img = recipe.data( 'thumb' ),
				description = recipe.parent().next().text(),
				url = recipe.attr( 'href' );

			var $modal = $( '<div class="mn-modal"><div class="mn-thumb" style="background-image: url(' + img + ')"></div><h5>' + title + '</h5><p>' + description + '</p><a href="' + url + '">See the recipe</a><span class="mn-close-modal">x</span></div>' );

			$modal.appendTo( $container );

			var h = $modal.outerHeight( true );
			$modal.css( 'margin-top', -h / 2 );

			setTimeout( function() {

				$container.addClass( 'mn-in rm-nodelay' );

				$modal.find( 'span.mn-close-modal' ).on( 'click', function() {

					$container.removeClass( 'mn-in' );

				} );
			
			}, 0 );

		};

	return { init : init };

})();