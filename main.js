/* ------------------- Swiper ---------------------- */
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});
/* ----------------------- Expand Menu ------------------------ */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  // const toggle = document.querySelector(`.${toggleId}`);
  // const nav = document.querySelector(`.${navId}`);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('bx-x');
    });
  }
};
showMenu('header-toggle-id', 'nav-menu');

/* ------------------- Active + Remove Menu ---------------------- */
const navLink = document.querySelector('.nav-link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.class.add('active');
}

// navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ---------------- Add CTA on Scroll ------------------- */

const header = document.querySelector('header');
const callToday = document.querySelector('.home-btn');
const homeCTA = document.querySelector('.home-cta');
const CTAoptions = {};

const observerCTA = new IntersectionObserver(function (entries, observerCTA) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      callToday.classList.remove('hidden');
    } else {
      callToday.classList.add('hidden');
    }
  });
}, CTAoptions);

observerCTA.observe(homeCTA);

/* ---------------- Scroll Sections Active Link ------------------- */

// const sections = document.querySelectorAll('section[id]');
// window.addEventListener('scroll', scrollActive);

// function scrollActive() {
//   const scrollY = window.pageYOffset;
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.nav-menu a[href"=' + sectionID + ']')
//         .classList.add('active');
//     } else {
//       document
//         .querySelector('.nav-menu a[href"=' + sectionID + ']')
//         .classList.remove('active');
//     }
//   });
// }

// function showBtn() {
//   const showBtn = document.getElementById('cta-btn')
//   if(this.scrollY)
// }

document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const accoridonContent = button.nextElementSibling;

    button.classList.toggle('accordion-button-active');

    if (button.classList.contains('accordion-button-active')) {
      accoridonContent.style.maxHeight = accoridonContent.scrollHeight + 'px';
    } else {
      accoridonContent.style.maxHeight = 0;
    }
  });
});
