



$( function(){

    var $menu_button = $( ".main_nav_container" ),
        $nav         = $( ".top_nav" ),
        $lev1_nav    = $( ".top_nav > li" ),
        $lev2_nav    = $( ".lev_2_nav" );

        $nav.hide();
        $lev2_nav.hide();


    // jQuery( ".menu_button" ).sidr();

    $menu_button.on( "mouseenter", function( e ){
        $nav.show();
    } );

    $menu_button.on( "mouseleave", function( e ){
        $nav.hide();
    } );

    $lev1_nav.on( "mouseenter", function( e ){

        $( this ).addClass( "active" ).find( ".lev_2_nav" ).show();
    } );

    $lev1_nav.on( "mouseleave", function( e ){

        $( this ).removeClass( "active" ).find( ".lev_2_nav" ).hide();
    } );
} );




$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});