const menuActive = document.querySelector('.menu__active'); 
const burger = document.querySelector('.user-list__item-menu'); 
const menuClose = document.querySelector('.menu-close'); 

function toggleMenu() {
	menuActive.classList.toggle('hidden'); 
}

burger.addEventListener('click', toggleMenu); 
menuClose.addEventListener('click', toggleMenu);