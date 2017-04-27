
/*nav bar fade*/
$(document).ready(function() {
    $(".navbar").delay(1000).fadeIn(500);
});

$(function() {
   window.setTimeout(function() {
       $(".navbar").css('background',"#141311" );
   },1000);
});


/*animated type*/
 document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.element', {
    	strings: ["UI/UX Designer.", "^500 Web Developer.", "^500 Photographer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: null,
        startDelay:500,
    });
 });

/*make the intro appear*/
$(document).ready(function() {
    $(".welcome-intro").delay(1000).fadeIn(500);
});

$(function() {
   window.setTimeout(function() {
       $(".welcome-section").css('background-image',"url('images/intro-grey.jpg')" );
   },1000);
});


/*skill bar*/
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

function checkAnimation() {
    var $elem = $('.bar .skillbar');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    } else {
        $elem.removeClass('start');
    }
}

$(window).scroll(function(){
    checkAnimation();
});