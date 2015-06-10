



$( function(){

    var $menu_button = $( ".main_nav_container" ),
        $nav         = $( ".top_nav" ),
        $lev1_nav    = $( ".top_nav > li" ),
        $lev2_nav    = $( ".lev_2_nav" ),
        breakpoint   = 1024,
        currentWidth = $( window ).width();
        // $menu_button_mobile = $( ".main_nav .button" );
        // $nav_buttons = $( ".main_nav li" );
        // $nav_list = $( ".main_nav ul" );
        // $menu_visible = false;

    if( currentWidth > breakpoint ){

        $nav.hide();
        $lev2_nav.hide();
        // $nav_list.hide();

    }

    // jQuery( ".menu_button" ).sidr();

    $menu_button.on( "mouseenter", function( e ){

        if( currentWidth > breakpoint ){

            $nav.show();
        }
    } );

    $menu_button.on( "mouseleave", function( e ){

        if( currentWidth > breakpoint ){

            $nav.hide();
        }
    } );

    $lev1_nav.on( "mouseenter", function( e ){
        
        if( currentWidth > breakpoint ){

            $( this ).addClass( "active" ).find( ".lev_2_nav" ).show();
        }
    } );

    $lev1_nav.on( "mouseleave", function( e ){
        
        if( currentWidth > breakpoint ){

            $( this ).removeClass( "active" ).find( ".lev_2_nav" ).hide();
        }
    } );

    $( window ).on( "resize", function( e ){

        currentWidth = $( window ).width();

        if( currentWidth > breakpoint ){
            $nav.hide();
            $lev2_nav.hide();
        }
        else{
            $nav.show();
            $lev2_nav.show();
        }
    } );

} );


/*
    hide all subnavs on page load
        only on mobile select subnavs
        only on mobile hide event


    click on title, show subnav
        click event
        only on mobile select the correct submenu
        only on mobile show/hide submenu

    click event on mobile, not desktop

    when page is resized
        check the page size
        show if larger than mobile
        hide if smaller than mobile
*/







//ready function
$(function(){

    // select with any valid css selector
    // selects one element
    var menu_click   = $( ".dropdown .click" ),
        sub_nav      = $( ".sub_menu" ),
        breakpoint   = 1024,
        currentWidth = $( window ).width();

    if( currentWidth <= breakpoint ){
        sub_nav.hide();
    }

    menu_click.on( "click", function( e ){

        if( currentWidth <= breakpoint ){

            $(this).siblings( ".sub_menu" ).toggle();
        }
        e.preventDefault();
    } );

    $( window ).on( "resize", function( e ){

        currentWidth = $( window ).width();

        if( currentWidth > breakpoint ){
            sub_nav.show();
        }
        else{
            sub_nav.hide();
        }
    } );
} );






// //ready function
// $(function(){


//     //jquery here!
//     console.log( $ );


//     //http://api.jquery.com/ for all jQuery functions
//     menu_button.addClass( "newClass" );

//     menu_button.on("mousedown", function( e ){

//         if( currentWidth <= breakpoint ){

//             nav_list.slideUp( "slow" );
//             menu_visible = false;

//         }
//         else( currentWidth >= breakpoint ){
//             nav_list.slideDown( "slow" );
//             menu_visible = true;
//         }


//     } );








$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});



























