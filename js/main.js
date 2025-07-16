let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('.header');

menuToggle.onclick = function() {
    header.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".art-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  }
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
     540: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
  },
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faqs) => {
  faqs.addEventListener("click", () => {
    faqs.classList.toggle("active");
  });
});

/* const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
}); */