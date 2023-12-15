const swiper = new Swiper('.reviews__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 28,
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28,
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