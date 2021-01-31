let comparisonDivisor;
let comparisonHandle;
let comparisonSlider;
window.addEventListener('resize', init);
window.addEventListener('reload', init);
init();

function init () {
  initElements();
  initEvents();
  swiperSlide();
  comparisonSlide();
}

function initEvents () {
}
function initElements () {
  comparisonDivisor = document.querySelector(".comparison-divisor");
  comparisonHandle = document.querySelector(".comparison-handle");
  comparisonSlider = document.querySelector(".comparison-slider");
}

function swiperSlide() {
  wrinkleSlide();
  blogSlide();
  reviewSlide();
}

function wrinkleSlide() {
  const wrinkleSlideSwiper = new Swiper('.wrink-slide-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
    }
  });
}

function blogSlide() {
  const blogSlideSwiper = new Swiper('.blog-slide-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    },
  });
}

function reviewSlide() {
  const reviewSlideSwiper = new Swiper('.review-slide-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    }
  });
}

function comparisonSlide() {
  comparisonHandle.style.left = comparisonSlider.value+"%";
  comparisonDivisor.style.width = comparisonSlider.value+"%";
}

