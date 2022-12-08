/* global jQuery */
/* global document */

jQuery(function () {
  'use strict';

  document.addEventListener("touchstart", function () {}, false);
  jQuery(function () {

    jQuery('body').wrapInner('<div class="wsmenucontainer" />');
    jQuery('<div class="overlapblackbg"></div>').prependTo('.wsmenu');

    jQuery('#wsnavtoggle').click(function () {
      jQuery('body').toggleClass('wsactive');
    });

    jQuery('.overlapblackbg').click(function () {
      jQuery("body").removeClass('wsactive');
    });

    jQuery('.wsmenu > .wsmenu-list > li').has('.sub-menu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
    jQuery('.wsmenu > .wsmenu-list > li').has('.wsmegamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');

    jQuery('.wsmenu-click').click(function () {
      jQuery(this).toggleClass('ws-activearrow')
        .parent().siblings().children().removeClass('ws-activearrow');
      jQuery(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu").not(jQuery(this).siblings('.wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu')).slideUp('slow');
      jQuery(this).siblings('.sub-menu').slideToggle('slow');
      jQuery(this).siblings('.wsmegamenu').slideToggle('slow');
    });

    jQuery('.wsmenu > .wsmenu-list > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
    jQuery('.wsmenu > .wsmenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');

    jQuery('.wsmenu-click02').click(function () {
      jQuery(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
      jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
    });

    jQuery(window).on('resize', function () {

      if (jQuery(window).outerWidth() < 992) {
        jQuery('.wsmenu').css('height', jQuery(this).height() + "px");
        jQuery('.wsmenucontainer').css('min-width', jQuery(this).width() + "px");
      } else {
        jQuery('.wsmenu').removeAttr("style");
        jQuery('.wsmenucontainer').removeAttr("style");
        jQuery('body').removeClass("wsactive");
        jQuery('.wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu').removeAttr("style");
        jQuery('.wsmenu-click').removeClass("ws-activearrow");
        jQuery('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
      }

    });

    jQuery(window).trigger('resize');

  });
}());


// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("pricing-hearder");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

$(function(){
  $(window).scroll(function(e) {
    if($(this).scrollTop()>3000){
      $('#pricing-hearder').fadeOut(); // Fading in the button on scroll after 150px
    }
    else{
      $('$pricing-hearder').fadeIn(); // Fading out the button on scroll if less than 150px
    }
  });
});
