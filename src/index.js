import elements from './templates/elements.hbs';
import menuData from './menu.json';
import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menu = document.querySelector('.js-menu');
const switchToggle = document.querySelector('#theme-switch-toggle');

function checkTheme() {
  localStorage.theme === Theme.DARK
    ? document.body.classList.replace('light-theme', 'dark-theme')
    : document.body.classList.replace('dark-theme', 'light-theme');
}

checkTheme();

switchToggle.addEventListener('change', e => {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    checkTheme();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    checkTheme();
  }
});

menu.insertAdjacentHTML('afterbegin', elements(menuData));
