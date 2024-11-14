const phoneIcon = document.querySelector('.header__phone-icon');
document.addEventListener('DOMContentLoaded', () => {
  phoneIcon.classList.add('animate');
});

phoneIcon.addEventListener('mouseenter', () => {
  phoneIcon.classList.add('hover');
  phoneIcon.classList.remove('animate');
});

phoneIcon.addEventListener('mouseleave', () => {
  phoneIcon.classList.remove('hover');
  phoneIcon.classList.add('animate');
});
