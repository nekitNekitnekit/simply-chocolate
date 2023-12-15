const swiper = new Swiper('.products__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 2300,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },

  freeMode: true,
  speed: 800,
});