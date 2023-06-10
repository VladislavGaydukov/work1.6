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