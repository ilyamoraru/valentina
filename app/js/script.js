$(document).ready(function () {

    //sliders

    //custom-slider

    $('.custom-slider').slick({
        arrows: false,
        dots: true,
    });

    //head slider in pages

    $('.head-slider').slick({
        arrows: false,
        dots: true,
    });

    //collection-item slider in block1

    $('.collection-item_slider').slick({
        arrows: false,
        dots: true,
    });

    //item-page slider in left block

    $('.item-page-slider_top').slick({
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        asNavFor: '.item-page-slider_bottom',
    });

    $('.item-page-slider_bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.item-page-slider_top',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
    });

    //центровщик буллетов

    function center_bullets() {
        var display_width = $(window).width();

        var dots_custom = $('.custom-slider .slick-dots');
        var width_dots_custom = dots_custom.width();
        var left_custom = (display_width - width_dots_custom)/2;
        dots_custom.css('left', left_custom);

        var dots_head = $('.head-slider .slick-dots');
        var width_dots_head = dots_head.width();
        var left_head = (display_width - width_dots_head)/2;
        dots_head.css('left', left_head);

        var dots_coll = $('.collection-item_slider .slick-dots');
        var width_dots_coll = dots_coll.width();
        var left_coll = (display_width - width_dots_coll)/2;
        dots_coll.css('left', left_coll);
    }

    center_bullets();

    //scroll up/down for header

    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta >= 0) {
            //up
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

    //favorites remove items

    $('.delete-btn').click(function() {
       $(this).parent().addClass('delete-btn-anim');
       setTimeout(del_item, 500);
    });

    function del_item() {
        $('.delete-btn-anim').remove();
    }

    //bedrooms hover in left nav menu

    // $('.left-item-first').mouseenter(function() {
    //     var inner_list = $(this).parent().find('.left-inner-list');
    //
    //     setTimeout(delay, 1000);
    //     inner_list.addClass('left-inner-list_show', 100, 'linear');
    // });
    //
    // function delay() {
    //     $('.left-inner-list').removeClass('left-inner-list_show');
    // }

    $('.left-item-first').mouseenter(function() {
       var item = $(this);

        var inner_list = $(this).parent().find('.left-inner-list');

        inner_list.addClass('left-inner-list_show', 100, 'linear');
    });

    //add in favorites. counter

    $('.infavorite, .heart-btn').click(function () {
       var count = parseInt($('.favoritе span').text());
       count = count + 1;
       console.log(count)
        $('.favoritе span').text(count);

       heart_class();
    });

    //collection page selector form

    $('.collection-select').change(function() {
       var number = $(this).val();
       var number_collection = '.collection' + number;
       $('.collection-result').removeClass('collection-show');
       $(number_collection).addClass('collection-show');
    });

    //toogle heart class in favorites

    function heart_class() {
        var count_heart = $('.favoritе span').text();

        if(count_heart == 0) {
           $('.favoritе').removeClass('mdi-cards-heart');
           $('.favoritе').addClass('mdi-heart-outline');
        } else {
            $('.favoritе').removeClass('mdi-heart-outline');
            $('.favoritе').addClass('mdi-cards-heart');
        }
    }

    heart_class();

    //modal

    //open

    //mobile-menu

    //open

    $('.burger-menu').click(function() {
        $('.modal-overlay').css('display','block');
        $('.mobile-menu').addClass('mobile-menu_show');
    });


    //close

    $('.close-menu').click(function () {
        $('.modal-overlay').css('display','none');
        $('.mobile-menu').removeClass('mobile-menu_show')
    });

    //узнать цену

    $('.cost-btn').click(function() {
       $('.modal-overlay').css('display','block');
       $('.modal-call').addClass('modal-call_show');

       center_modal_cost();
    });

    function center_modal_cost() {
        var window_width = $(window).width();
        var modal_width = $('.modal-call').width();
        var left = (window_width-modal_width - modal_width/2)/2;

        $('.modal-call').css('left', left);
    }

    center_modal_cost();

    //img item-page

    $('.item-page-slider_top img').click(function() {
       $('.modal-overlay').css('display', 'block');
       $('.modal-img').addClass('modal-img_show');

       $('.modal-img .img-cont img').remove();

       var cont = $('.modal-img .img-cont');
       var img = $(this).clone();

       cont.append(img);

       center_modal_img();
    });

    function center_modal_img() {
        var window_width = $(window).width();
        var modal_width = $('.modal-img').width();
        var left = (window_width-modal_width)/2;

        $('.modal-img').css('left', left);
    }

    center_modal_img();

    //close

    $('.close-btn_modal, .modal-overlay, .close-btn').click(function() {
        $('.modal-overlay').css('display', 'none');

        $('.modal-call').removeClass('modal-call_show');
        $('.modal-img').removeClass('modal-img_show');
    });

    window.addEventListener("keydown", function(evt) {
        if(evt.keyCode === 27) {
            evt.preventDefault();

            $('.modal-overlay').css('display','none');
            $('.modal-call').removeClass('modal-call_show');
            $('.modal-img').removeClass('modal-img_show');
        };
    });

    //contacts page toggle maps

    //map1

    $('.nav-map-1').click(function() {
       $('.nav-map-2').removeClass('active-nav-item');
       $(this).addClass('active-nav-item');

       $('.contacts-list-cont2').css('display', 'none');
       $('.contacts-list-cont1').css('display', 'block');

       $('#map2').css('display', 'none');
       $('#map1').css('display', 'block');
    });

    //map 2

    $('.nav-map-2').click(function() {
        $('.nav-map-1').removeClass('active-nav-item');
        $(this).addClass('active-nav-item');

        $('.contacts-list-cont1').css('display', 'none');
        $('.contacts-list-cont2').css('display', 'block');

        $('#map1').css('display', 'none');
        $('#map2').css('display', 'block');
    });

    //скрываем bg у infowindow на картах

    function hide_bg() {
        $('.info').parent().parent().parent().siblings().remove();
    }

    setTimeout(hide_bg, 1000);

    if (window.matchMedia("(min-width: 1000px)").matches) {
        $('.desctop-hidden').remove();
    }

    if (window.matchMedia("(max-width: 1000px)").matches) {
        $('.mobile-hidden').remove();
    }

});