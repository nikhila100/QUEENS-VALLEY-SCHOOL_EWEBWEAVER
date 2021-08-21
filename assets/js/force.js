$(document).ready(function () {

    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $(".navTray").toggleClass('open');
        $("header").toggleClass('open');
        $(".logoBox").toggleClass('closed');
        easeMenu();
    });



    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if ($(".staticScrollWatch").length) {
            if ($(window).width() > 350) {
                $('.background1, .logoBox.header').each(function () {
                    var topDistance = $(this).offset().top;
                    var top2Distance = $(".staticScrollWatch").offset().top;
                    var distanceAdjust = parseInt(top2Distance) - 100;

                    if (distanceAdjust < scrollTop) {
                        if ($(".fixed").length) {
                            //Do Nothing
                        } else {
                            $(".logoBox.header").addClass("fixed");
                            //console.log("fix added")
                        }
                    }

                    if (distanceAdjust > scrollTop) {
                        if ($(".fixed").length) {
                            $(".logoBox.header").removeClass("fixed");
                        } else {
                            //Do Nothing
                        }
                    }
                    // staticScrollWatch
                });
            }
        }

        if ($(".fixed").length) {
            $('.scrollup').fadeIn();
            $("header").addClass("scrolledHeader");
        } else {
            $('.scrollup').fadeOut();
            $("header").removeClass("scrolledHeader");
        }
    });

    if ($(window).width() < 350) {
        $(".logoBox.header").addClass("fixed");
        $("header").addClass("scrolledHeader");
    }
    $(window).resize(function () {
        if ($(window).width() < 350) {
            $(".logoBox.header").addClass("fixed");
            $("header").addClass("scrolledHeader");
        } else {
            $(".logoBox.header").removeClass("fixed");
            $("header").removeClass("scrolledHeader");
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

//Misc Function Declarations
var incrementerCheck = 0;

function easeMenu() {
    if ($('.navTray').css('opacity') == 0) {
        $('.navTray').css('opacity', "1");
    } else {
        $('.navTray').css('opacity', "0");
    }
}



function runOwlCarousel() {
    if ($('.recentNewSliderSection').length) {
        $('.recentNewSliderSection').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            singleItem: true
        });
    }
}