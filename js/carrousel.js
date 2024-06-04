var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      navigation: false
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 120
    },
    1400: {
      slidesPerView: 3,
      allowSlidePrev: false,
      allowSlideNext: false,
      
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  });