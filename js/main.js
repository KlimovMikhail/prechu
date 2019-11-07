var slider = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    641: {
      autoplay: false,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

