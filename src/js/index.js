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
const burgerButton = document.querySelector('.header__button--menu');
const outButton = document.querySelector('.menu__button--out');
const mainContent = document.querySelector('.content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const readMore = document.querySelector('.read-more');
const readMoreText = document.querySelector('.company-presentation__text--hidden');
const hidden = document.querySelector('.close');
const repairBrandShowAll = document.querySelector('.repair-brand__show-all');
const repairBrandDropDown = document.querySelector('.bar-drop-down');
const repairBrandCloseAll = document.querySelector('.close-all');
const repairTechniqueDropDown = document.querySelectorAll('.link-drop-down');
const repairTechniqueShowAll = document.querySelector('.repair-technique__show-all');
const repairTechniqueCloseAll = document.querySelector('.repair-technique__close-all')

burgerButton.addEventListener('click', function (e) {
  dropDownMenu.classList.add('menu-visibility');
  outButton.classList.remove('menu__button--visibility');
  mainContent.classList.add('modal-blur');
  header.classList.add('modal-blur');
  footer.classList.add('modal-blur');
});

outButton.addEventListener('click', function () {
  dropDownMenu.classList.remove('menu-visibility');
  mainContent.classList.remove('modal-blur');
  header.classList.remove('modal-blur');
  footer.classList.remove('modal-blur');
});

window.addEventListener('click', function (e) {
  if (!dropDownMenu.contains(e.target) && !burgerButton.contains(e.target)) {
    dropDownMenu.classList.remove('menu-visibility');
    mainContent.classList.remove('modal-blur');
    header.classList.remove('modal-blur');
    footer.classList.remove('modal-blur');  
  }
});

readMore.addEventListener('click', function (e) {
  e.preventDefault();
  readMoreText.classList.remove('company-presentation__text--hidden');
  readMore.classList.add('button-hidden');
  hidden.classList.remove('button-hidden')
});

hidden.addEventListener('click', function (e) {
  e.preventDefault();
  hidden.classList.add('button-hidden');
  readMore.classList.remove('button-hidden');
  readMoreText.classList.add('company-presentation__text--hidden')

});

repairBrandShowAll.addEventListener('click', function (e) {
  e.preventDefault();
  repairBrandDropDown.classList.remove('bar-drop-down');
  repairBrandShowAll.classList.add('button-hidden');
  repairBrandCloseAll.classList.remove('button-hidden');
});

repairBrandCloseAll.addEventListener('click', function (e) {
  e.preventDefault();
  repairBrandDropDown.classList.add('bar-drop-down');
  repairBrandShowAll.classList.remove('button-hidden');
  repairBrandCloseAll.classList.add('button-hidden');
});

repairTechniqueShowAll.addEventListener('click', function (e) {
  e.preventDefault();
  for (var i = 0; i < repairTechniqueDropDown.length; i++) {
    repairTechniqueDropDown[i].classList.remove('link-drop-down');
  }
  repairTechniqueShowAll.classList.add('button-hidden');
  repairTechniqueCloseAll.classList.remove('button-hidden');
});

repairTechniqueCloseAll.addEventListener('click', function (e) {
  e.preventDefault();
  for (var i = 0; i < repairTechniqueDropDown.length; i++) {
    repairTechniqueDropDown[i].classList.add('link-drop-down');
  }
  repairTechniqueShowAll.classList.remove('button-hidden');
  repairTechniqueCloseAll.classList.add('button-hidden');
});

const modalCall = document.querySelector('.modal-call');
const modalCallButtonOpenMobile = document.querySelector('.header__button--call');
const modalCallButtonOpenDesktop = document.querySelector('.menu__button--call');
const modalCallButtonClose = document.querySelector('.modal-call__out');

modalCallButtonOpenDesktop.addEventListener('click', function (e) {
  e.preventDefault();
  modalCall.classList.remove('modal-call__visibility');
})

modalCallButtonOpenMobile.addEventListener('click', function (e) {
  e.preventDefault();
  modalCall.classList.remove('modal-call__visibility');
});

modalCallButtonClose.addEventListener('click', function (e) {
  e.preventDefault();
  modalCall.classList.add('modal-call__visibility');
});

const modalFeedback = document.querySelector('.modal-feedback');
const modacFeedbackButtonOpenMobile = document.querySelector('.header__button--message');
const modalFeedbackButtonDesktop = document.querySelector('.menu__button--message');
const modalFeedbackButtonClose = document.querySelector('.modal-feedback__out');

modalFeedbackButtonDesktop.addEventListener('click', function (e) {
  e.preventDefault();
  modalFeedback.classList.remove('modal-feedback__visibility');
});

modacFeedbackButtonOpenMobile.addEventListener('click', function (e) {
  e.preventDefault();
  modalFeedback.classList.remove('modal-feedback__visibility');
});

modalFeedbackButtonClose.addEventListener('click', function (e) {
  e.preventDefault();
  modalFeedback.classList.add('modal-feedback__visibility');
});