// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Плавная прокрутка к элементу
window.ResizeObserver = undefined;

const anchorLink = document.querySelectorAll('[data-goto]');
if (anchorLink.length > 0) {
    anchorLink.forEach(link => {
        link.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        let menuLink = e.target;
        e.preventDefault();

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })

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