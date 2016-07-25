$(document).foundation()


//hover effect on phones Using jQuery
$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});
//add a class hover to anything you want this to work with.

//replace any instance of:

//element:hover {
  //  rule:properties;
//}
//with

//element:hover, element.hover_effect {
  //  rule:properties;
//}


//to stop the browser from asking to copy/save image.
//   .hover {
//   -webkit-user-select: none;
//   -webkit-touch-callout: none;        
//}