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

navLink.forEach((n) => n.addEventListener('click', linkAction));
