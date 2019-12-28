    $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
    $("#header-sticky-wrapper").addClass("active");
    } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#header-sticky-wrapper").removeClass("active");
    }
    });
    

    // <!-- script for new menu btn -->
    function myFunction(x) {
      x.classList.toggle("change");
    }

    $('.MainSlider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplayHoverPause:true,
    smartSpeed:900,
    fluidSpeed:100,
    slideSpeed: 50,
    rewind:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



    // Product 1 Slider
    $('.product1').owlCarousel({
    loop:true,
    margin:30,
    padding:0,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    smartSpeed:900,
    fluidSpeed:100,
    slideSpeed: 50,
    rewind:false,
    autoplay:true,
    autoplayTimeout:4000,
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

    // Product 2 Slider
    $('.product2').owlCarousel({
    loop:true,
    margin:30,
    padding:0,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    smartSpeed:900,
    fluidSpeed:100,
    slideSpeed: 50,
    rewind:false,
    autoplay:true,
    autoplayTimeout:4000,
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
    // blog_slider
    $('.blog_slider').owlCarousel({
    loop:true,
    margin:30,
    padding:0,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    smartSpeed:900,
    fluidSpeed:100,
    slideSpeed: 50,
    rewind:false,
    autoplay:false,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2,
        }
    }
})
