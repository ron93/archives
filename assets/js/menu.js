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
    
    
    //event for openi/closing menu and showing modal(details)
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

})();