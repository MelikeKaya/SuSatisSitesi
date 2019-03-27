/*---------------------------------------------
Template name:  mineralo
Version:        1.0
Author:         layerdrops
Author Email:   layerdrops@gmail.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Main menu
02: Background image
03: Parsley form validation
04: Back to top button
05: Changing svg color
06: Ajax Contact Form
 07: Preloader
08: Content animation
09: counter up
10: Parallax
11: Google map
12: testimonial carousel
13: partner carousel
14: banner carouser 3
15: testimonial carousel2
16: video popup



----------------------------------------------*/

    (function($) {
        "use strict";

            /* 01: Main menu
            ==============================================*/

            $('.header-menu a[href="#"]').on('click', function(event) {
                event.preventDefault();
            });

            $(".header-menu").menumaker({
                title: '<i class="fa fa-bars"></i>',
                format: "multitoggle"
            });

            var mainHeader = $('.main-header');

            if($(window).scrollTop() > 100) $('.main-header').addClass('sticky fadeInDown')
            $(window).on('scroll', function(e){
                if($(this).scrollTop() < 100){
                    $('.main-header').removeClass('sticky fadeInDown')
                }else
                    $('.main-header').addClass('sticky fadeInDown')        
                });

            /* 02: Background image
            ==============================================*/

            var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
            });


            /* 03: Parsley form validation
            ==============================================*/

            $('.parsley-validate, .parsley-validate form').parsley();

            /*============================================
                04: Back to top button
            ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }


        /*=============================================
            05: Changing svg color
        ==============================================*/

        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        });

        /*=============================================
            06: Ajax Contact Form
        ==============================================*/

      
         $('.contact-form').on('submit', 'form', function(e) {
            e.preventDefault();

            var $el = $(this);

            $.post($el.attr('action'), $el.serialize(), function(res){
                res = $.parseJSON( res );
                $el.parent('.contact-page-form').find('.form-response').html('<span>' + res[1] + '</span>');
            });
        });
      
    
    /*============================================
        07: Preloader
    ==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });


    /* 08: Content animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '.1' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });

    });
 
    /*=========================================================
        09: counter up
    =========================================================*/
           $('.counter').counterUp({});
         
    /*====================================================
        10: Parallax
    ====================================================*/
        var $parallaxLayers = $('[data-trigger="parallax_layers"]');

        if( $parallaxLayers.length ){
            $parallaxLayers.each(function () {
                new Parallax( $(this)[0], {
                    selector: '[data-depth]'
                });
            });
        }
  
/*===================================================
        11: Google map
===================================================*/
    //Google Map
    if($('#google-map').length){
        var googleMapSelector = $('#google-map'),
            myCenter = new google.maps.LatLng(40.7185635, -74.040);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 12,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#8a8c91"
                        }
                    ]
                },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f5f7fc"
                        }
                    ]
                },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                'color' : '#ffffff',
                                "saturation": -100
                        },
                            {
                                "lightness": 45
                        }
                    ]
                },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                        }
                    ]
                },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                        },
                            {
                                "visibility": "on"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ebedf2"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ff0000"
                        }
                    ]
                }
            ]
            };
            var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'assets/img/pin.png'
            });
            marker.setMap(map);
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }
/*===========================================
        12: testimonial carousel
===========================================*/
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay:false,
        autoplayTimeout: 5000,
        autoplaySpeed: 4000,
        responsive:{
            0:{
                items:1
            },
            320:{
                items:1,
            },
            480:{
                items:1,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    })

/*=====================================================
    13: partner carousel
=====================================================*/
    $('.partner-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items: 3
            },
            768:{
                items: 4
            },
            992:{
                items:5
            }
        }
    })
/*=====================================================
    14: banner carouser 3
=====================================================*/
        //Start Banner Js

        var wWidth = $(window).width();
        var wHight = $(window).height(),
            bannerSlider = $('#banner_slider1');

            

        if (wWidth <=767) {
            if (bannerSlider.length) {
                bannerSlider.camera({
                    height: 1050 + 'px',
                    loader: false,
                    navigation: true,
                    autoPlay: false,
                    fx: 'random',
                    time: 4000,
                    overlayer: true,
                    playPause: false,
                    pagination: false,
                    thumbnails: false,
                    onEndTransition: function () {
                        $('.cameraSlide img').addClass('grow');
                    }
                });
            }

        } else if (wWidth < 991){
            if (bannerSlider.length) {
                bannerSlider.camera({
                    height: 800 + 'px',
                    loader: false,
                    navigation: true,
                    autoPlay: false,
                    fx: 'random',
                    time: 4000,
                    overlayer: true,
                    playPause: false,
                    pagination: false,
                    thumbnails: false,
                    onEndTransition: function () {
                        $('.cameraSlide img').addClass('grow');
                    }
                });
            }
        }
       
        if (wWidth >= 991) {
            if (bannerSlider.length) {
                bannerSlider.camera({
                    loader: false,
                    height: 900 + 'px',
                    navigation: true,
                    autoPlay: false,
                    fx: 'random',
                    time: 4000,
                    overlayer: true,
                    playPause: false,
                    pagination: false,
                    thumbnails: false,
                    onEndTransition: function () {
                        $('.cameraSlide img').addClass('grow');
                    }
                });
            }
        }
/*===========================================
        15: testimonial carousel2
===========================================*/

    $('.testionial-carousel2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            700:{
                items:1
            },
            991:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    /* 16: video popup */
        var t = $(".video-btn");
        t.length && t.magnificPopup({
            type: "iframe"
        })
        
})(jQuery);