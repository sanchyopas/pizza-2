// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Плавная прокрутка к элементу


const anchorLink = document.querySelectorAll('[data-goto]');

console.log(anchorLink);

if (anchorLink.length > 0) {
    anchorLink.forEach(link => {
        link.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        console.log(e.target);
        let menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })

            e.preventDefault();
        }
    }
}

// window.onscroll = function () {

//     let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

//     if (posTop > 500) {
//         document.querySelector('.arrow-top').classList.add('arrow-top-active');
//     } else {
//         document.querySelector('.arrow-top').classList.remove('arrow-top-active');
//     }
// }