/* Template Name: Devazo - Landing
   Author: Themesdesign
   Version: 1.0.0
   Created: Sep 2023
   File Description: Plugins
*/

(function ($) {

    'use strict';
    
    // Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
    });

    // Owl-Carousel
    $("#owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        itemsDesktop: [1199, 3],
        itemstablet: [768, 1],
        itemsDesktopSmall: [768, 1],
    });

    // Contact
    $('.video-play-icon, .video-play-icon-trigger').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // magnificPopup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });

    // swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        initialSlide: 3,
        keyboardControl: true,
        mousewheelControl: false,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
            slidesPerView: 3,
        }
    });

})(jQuery)