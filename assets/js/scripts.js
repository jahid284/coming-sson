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
    //  clientOneSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientOneSlider').owlCarousel({
            loop:true,
            margin:30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.clientOneSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientOneSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientOneSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());


    // -------------------------------------------------------------
    //  clientThreeSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientThreeSlider').owlCarousel({
            loop:true,
            nav:false,
            margin: 90,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

    }());


    // -------------------------------------------------------------
    //  clientSevenSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientSevenSlider').owlCarousel({
            loop:true,
            nav:false,
            margin:90,
            responsive:{
                0:{
                    items:2
                },
                700:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

    }());





    // -------------------------------------------------------------
    //  clientNineSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientNineSlider').owlCarousel({
            loop:true,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:6,
                },
                
            }
        })


        // Navigation 
        var owl = $('.clientNineSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientNineSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientNineSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());



    // -------------------------------------------------------------
    //  clientTenSlider
    // -------------------------------------------------------------
    (function () {

        $('.clientTenSlider').owlCarousel({
            loop:true,
            margin: 30,
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        })


        // Navigation 
        var owl = $('.clientTenSlider');
        owl.owlCarousel();

        // Go to the next item
        $('.clientTenSlider-nav .next').click(function () {
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.clientTenSlider-nav .prev').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });

    }());




    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function () {

        $('[data-toggle="tooltip"]').tooltip()

    }());




    // -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {

        $("a[rel^='prettyPhoto']").prettyPhoto();

    }());



    // -------------------------------------------------------------
    // flexslider
    // -------------------------------------------------------------
    (function () {

      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        directionNav: false
      });
        
    }());



    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function () {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation 
        $('.prev').on('click', function(){
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function(){
            $('.testimonialSlider').flexslider('next')
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



    // ----------------------------------------------------------------
    // owlcarousel   {portfolio-fifteen}
    // ----------------------------------------------------------------
    (function () {

            $('.portfolio-wraper-fifteen').owlCarousel({
                stagePadding: 100,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:3
                    }
                }
            })

     }());



    // ----------------------------------------------------------------
    // owlcarousel   {portfolio-sixteen}
    // ----------------------------------------------------------------

    (function () {
       
            $('.portfolio-wraper-sixteen').owlCarousel({
                stagePadding: 150,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:2
                    }
                }
            })

    }());




    // ----------------------------------------------------------------
    // owlcarousel   {portfolio-seventeen}
    // ----------------------------------------------------------------

    (function () {
       
            $('.portfolio-wraper-seventeen').owlCarousel({
                stagePadding: 150,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:2
                    }
                }
            })

    }());



     // ----------------------------------------------------------------
    // owlcarousel   {portfolio-eighteen}
    // ----------------------------------------------------------------

    (function () {
       
            $('.portfolio-wraper-eighteen').owlCarousel({
                stagePadding: 100,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:3
                    }
                }
            })

    }());



     // ----------------------------------------------------------------
    // owlcarousel   {portfolio-nineteen}
    // ----------------------------------------------------------------

    (function () {
       
            $('.portfolio-wraper-nineteen').owlCarousel({
                stagePadding: 150,
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:2
                    }
                }
            })

    }());





}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
  e.stopPropagation()
})