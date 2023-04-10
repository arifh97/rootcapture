(function() {
    'use strict';
    jQuery(document).ready(function() {

        $.browserDetection(true);

        $('.active-slider').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: true,
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }

        });

        $(window).on('scroll', function(e) {
            let x = $(window).scrollTop();

            // back to top button show
            if (x > 400) {
                $('.backtop').fadeIn('slow')
            } else {
                $('.backtop').fadeOut('fast')
            }

            // mini cart floating show
            if (x > 500) {
                $('.mini-cart').fadeIn('slow');
            } else {
                $('.mini-cart').fadeOut('fast');
            }

            // scroll after fixed nav
            if (x > 400) {
                $('.heading').addClass('fixed_nav');
                $('.course_details_subtitle').addClass('opaticy-visible')
            } else {
                $('.heading').removeClass('fixed_nav');
                $('.course_details_subtitle').removeClass('opaticy-visible')
            }
        })


    });
})();