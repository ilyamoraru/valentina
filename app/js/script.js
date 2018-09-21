$(document).ready(function () {
    //scroll up/down

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            //top
            $('.header').removeClass('header-down');
            $('.header').addClass('header-up');
            $('header').css('transform', 'none');
        }
        else {
            //down
            $('.header').removeClass('header-up');
            $('.header').addClass('header-down');
            $('header').css('transform', 'translateY(-20vh)');
        }

        if($(window).scrollTop() <= 20) {
            $('.header').removeClass('header-down');
            $('.header').removeClass('header-up');
        }
    });


     //inner menu

    $('.catalog-menu').mouseenter(function() {
        $('.catalog-inner-list').css('display', 'flex');
        $('.catalog-inner-list').animate({
            opacity: 1,
            height: 254,
        }, 300);
    });

    $('.catalog-inner-list').mouseleave(function () {
        $(this).css('display', 'none');
        $(this).animate({
            opacity: 0,
            height: 0,
        }, 200);
    })
});