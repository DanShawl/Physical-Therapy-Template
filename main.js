/* ----------------------- Expand Menu ------------------------ */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  // const toggle = document.querySelector(`.${toggleId}`);
  // const nav = document.querySelector(`.${navId}`);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      console.log('hello');
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
