jQuery(function ($) {

    'use strict';


    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function () {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });



    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------
    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({
        documentWrapper: '#main-wrapper',
        contentWrapper : '.content-wrapper',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.offcanvas-pusher'
        });
    }());




    // -------------------------------------------------------------
    // testimonialSliderOne
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSixteen').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.prev').on('click', function(){
            $('.testimonialSixteen').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.testimonialSixteen').flexslider('next')
            return false;
        })
    }());




 // -------------------------------------------------------------
    // clientTestimonial on blog page widget
    // -------------------------------------------------------------
    (function () {

        $('.clientTestimonial').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })
    }());


    // -------------------------------------------------------------
    // testimonialSeventeenSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSeventeenSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.testimonialSeventeenSlider-nav .prev').on('click', function(){
            $('.testimonialSeventeenSlider').flexslider('prev')
            return false;
        })

        $('.testimonialSeventeenSlider-nav .next').on('click', function(){
            $('.testimonialSeventeenSlider').flexslider('next')
            return false;
        })
    }());




    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            }); 

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());




}); // JQuery end

