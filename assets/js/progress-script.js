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
    // Progress Bar
    // -------------------------------------------------------------
 
    $('.progressOne').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });





    // -------------------------------------------------------------
    // Counter One (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-one').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: false,
            lineWidth: 8,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    // -------------------------------------------------------------
    // Counter Two (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-two').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 3,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter Three (counter)
    // -------------------------------------------------------------

    $('.counter-section').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });



    // -------------------------------------------------------------
    // Counter Four (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-four').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 7,
            size: 125,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter Five (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-Five').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: false,
            lineWidth: 3,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    // -------------------------------------------------------------
    // Counter Six (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-six-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart-six-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#eb768c',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#c183d6',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-six-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73c8b7',
            trackColor: '#fff',
            scaleColor: '#fff',
            lineWidth: 30,
            size: 148,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    // -------------------------------------------------------------
    // Counter (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-seven-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#1788bd',
            lineWidth: 12,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-seven-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#dc677d',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

    (function () {

        $('.chart-seven-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#ae6ec3',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());

    (function () {

        $('.chart-seven-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#fff',
            trackColor: '#65baa9',
            scaleColor: '#73c8b7',
            lineWidth: 10,
            size: 175,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




     // -------------------------------------------------------------
    // Counter Eight (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-eight').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#fff',
            scaleColor: false,
            lineWidth: 8,
            size: 150,
            scaleLength: 1,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    // -------------------------------------------------------------
    // Counter Nine (Chart)
    // -------------------------------------------------------------

    (function () {

        $('.chart-nine-1st').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#31aae2',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());



    (function () {

        $('.chart-nine-2nd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#eb768c',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-nine-3rd').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#c183d6',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());


    (function () {

        $('.chart-nine-4th').easyPieChart({
            //your configuration goes here
            easing: 'easeOut',
            delay: 3000,
            barColor: '#73c8b7',
            trackColor: '#f9f9f9',
            scaleColor: '#fff',
            lineWidth: 10,
            size: 170,
            scaleLength: 0,
            lineCap:'square',
            animate: 5000,
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });

    }());




    //-------------------------------------------------------
    // counter Ten
    //-------------------------------------------------------
     (function () {
            $('.counterTen').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

      }());





    //-------------------------------------------------------
    // counter Eleven
    //-------------------------------------------------------
    (function () {
            $('.counterEleven').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

      }());


    //-------------------------------------------------------
    // counter Twelve
    //-------------------------------------------------------
    (function () {
            $('.counterTwelve').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
                if (visible) {
                    $(this).find('.timer').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(this).unbind('inview');
                }
            });

    }());



    //-------------------------------------------------------
    // counter Thirteen
    //-------------------------------------------------------
    (function () {
        $('.counterThirteen').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

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