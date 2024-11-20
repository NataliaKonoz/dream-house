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

const bodyElement = document.body;
const collapseElement = document.querySelector('.collapse');
const menuButton = document.querySelector('.header__burger-icon');

document.addEventListener('DOMContentLoaded', () => {
  bodyElement.style.backgroundImage = 'url(../images/kitchen.png)';
  bodyElement.style.setProperty('--after-bg-color', 'rgba(0, 0, 0, 0.45)');
  let isClicking = false;

  menuButton.addEventListener('click', () => {
    if (isClicking) return;
    isClicking = true;
    setTimeout(() => {
      isClicking = false;
    }, 500);

    if (bodyElement.style.backgroundImage.includes('kitchen.png')) {
      bodyElement.style.backgroundImage =
        'url(../images/background-navbar.png)';
      bodyElement.style.setProperty('--after-bg-color', 'rgba(0, 0, 0, 0.6)');
      bodyElement.style.backdropFilter = 'blur(6px)';
    } else {
      bodyElement.style.backgroundImage = 'url(../images/kitchen.png)';
      bodyElement.style.setProperty('--after-bg-color', 'rgba(0, 0, 0, 0.45)');
      bodyElement.style.backdropFilter = 'blur(0)';
    }
  });
});
