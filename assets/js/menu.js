var Menu = (function() {
	// main container
var $container = $( '#mn-container' ),						
	// the cover, middle and right panels
	$cover = $container.find( 'div.mn-cover' ),
	$middle = $container.find( 'div.mn-middle' ),
	$right = $container.find( 'div.mn-right' ),
	// open and close elements
	$open = $cover.find('a.mn-button-open'),
	$close = $right.find('span.mn-close'),
	// the links for each recipe (photo and details)
	$details = $container.find( 'a.mn-viewdetails' ),
    
    
    //event for opening/closing menu and showing modal(details)
    init = function(){
        
        initEvent();
        
    },
    initEvent = function(){
        $open.on('click', function(event){
            
            openMenu();
            return false;
        });
        
        $close.on('click', function(event){
            
            closeMenu();
            return false;
        });
        
        $details.on('click',function(){
            $container.removeClass('mn-in').children('div.mn-modal').remove();
            viewDetails($(this));
            return false;
        });
    },
    
    
    //function that adds class(.mn-open) to container to open menu
    openMenu = function(){
        
        $container.addClass('mn-open');
        
    },
    //function that removes classes() to container to close menu
    closeMenu = function(){
        
        $container.removeClass('mn-open mn-nodelay mn-in');
    },
    
    //to show menu item details
    
    viewDetails = function( recipe ) {

	var title = recipe.text(),
		img = recipe.data( 'thumb' ),
		description = recipe.parent().next().text(),
		url = recipe.attr( 'href' );

	var $modal = $( '
' + title + '
' + description + '
See the recipex
' );

	$modal.appendTo( $container );

	var h = $modal.outerHeight( true );
	$modal.css( 'margin-top', -h / 2 );

	setTimeout( function() {

		$container.addClass( 'mn-in mn-nodelay' );

		$modal.find( 'span.mn-close-modal' ).on( 'click', function() {

			$container.removeClass( 'mn-in' );

		} );
	
	}, 0 );

};

	return { init : init };

})();