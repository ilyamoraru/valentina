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

        //white bg for header in top of page

        if($(window).scrollTop() <= 20) {
            $('.header').removeClass('header-down');
            $('.header').removeClass('header-up');
        }
    });


     //inner menu

    //show

    $('.catalog-menu').mouseenter(function() {
        $('.catalog-inner-list').css('display', 'flex');
        $('.catalog-inner-list').animate({
            opacity: 1,
            height: 254,
        }, 300);
    });

    //close

    $('.catalog-inner-list').mouseleave(function () {
        $(this).css('display', 'none');
        $(this).animate({
            opacity: 0,
            height: 0,
        }, 200);
    });

    //custom-slider

    $('.custom-slider').slick({
        arrows: false,
        dots: true,
    });

    //центровщик буллетов

    function center_bullets() {
        var dots = $('.custom-slider .slick-dots');
        var width_dots = dots.width();
        var display_width = $(window).width();
        var left = (display_width - width_dots)/ 2;

        dots.css('left', left);
    }

    center_bullets();

    //favorites remove items

    $('.delete-btn').click(function() {
       $(this).parent().addClass('delete-btn-anim');
       setTimeout(del_item, 500);
    });

    function del_item() {
        $('.delete-btn-anim').remove();
    }

});