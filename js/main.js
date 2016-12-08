// ----- Scroll Top -----//
var scrollNav = $('#ScrollNav');
var link = $('.link');
var logo = $('.dark_logo');

$(window).scroll(function() {
    scroll = $(window).scrollTop();

    if(scroll > 200){
        scrollNav.addClass('scrollActive');
        link.addClass('linkActive');
        logo.addClass('logoActive');
    } else {
        scrollNav.removeClass('scrollActive');
        link.removeClass('linkActive');
        logo.removeClass('logoActive');
    }
});


 // ----HAMBURGER ----//

 $('.btn-nav').click(function(){
    $('.btn-nav').toggleClass('active');
    $('.navigation-wrapper').toggleClass('active');
 });