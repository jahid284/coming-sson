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
    // PrettyPhoto
    // -------------------------------------------------------------
    (function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto(); 
    }());




    // ----------------------------------------------------------------
    // gallery-one
    // ----------------------------------------------------------------
        (function () {

            $('.gallery-one-wrapper').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false
            })

                // Navigation 
                $('.gallery-one-wrapper-nav .prev').on('click', function(){
                    $('.gallery-one-wrapper').flexslider('prev')
                    return false;
                })

                $('.gallery-one-wrapper-nav .next').on('click', function(){
                    $('.gallery-one-wrapper').flexslider('next')
                    return false;
                })
        }());



    // ----------------------------------------------------------------
    // gallery-five
    // ----------------------------------------------------------------

    (function () {
        $('.gallery-five-wrapper').owlCarousel({
                margin:30,
                dots:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            })

        }());


    // ----------------------------------------------------------------
    // gallery-six
    // ----------------------------------------------------------------

    (function () {
        $('.gallery-six-two-wrapper').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                directionNav: false,
            })

    }());




    // ----------------------------------------------------------------
    // gallery-eight
    // ----------------------------------------------------------------
    (function () {
        $('.gallery-eight-wrapper').owlCarousel({
                margin:30,
                nav:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:6
                    }
                }
            })
    }());




    // ----------------------------------------------------------------
    // gallery-nine
    // ----------------------------------------------------------------
    (function () {
        $('.gallery-nine-wrapper').owlCarousel({
                margin:1,
                nav:false,
                autoplay:true,   
                autoplaySpeed:150,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
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
