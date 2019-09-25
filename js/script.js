
var hamburgerButton = document.querySelector('.hamburger-btn');
var mobileNav = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', openMobile);
mobileNav.addEventListener('click', closeMobile);

function openMobile(){
  mobileNav.classList.add('open');
}

function closeMobile(){
  mobileNav.classList.remove('open');
}