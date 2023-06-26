import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
});

const dropDownMenu = document.querySelector('.menu');
const burgerButton = document.querySelector('.header__button--menu')
const outButton = document.querySelector('.menu__button--out')

burgerButton.addEventListener('click', function () {
  dropDownMenu.classList.add('menu-visibility');
  outButton.classList.remove('menu__button--visibility');
});

outButton.addEventListener('click', function () {
  dropDownMenu.classList.remove('menu-visibility');
});