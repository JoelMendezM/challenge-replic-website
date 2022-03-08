const btnMenu = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
const secctionDescriptionMargin = document.querySelector(".section-title__description")
const btnClose = document.querySelector(".menu__close");

btnMenu.addEventListener('click', function(){
  menu.classList.toggle('show-menu');
  btnMenu.style.visibility = "hidden";
  btnClose.classList.toggle('show-close-btn')
  secctionDescriptionMargin.classList.toggle('section-title__extra-margin')
})

btnClose.addEventListener('click', function(){
  menu.classList.toggle('show-menu');
  btnMenu.style.visibility = "visible";
  secctionDescriptionMargin.classList.toggle('section-title__extra-margin')
  btnClose.classList.toggle('show-close-btn')
})
