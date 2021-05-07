$(document).ready(function(){

    (function openMenu() {
        const menu = document.querySelector('.menu');
        const menuBtn = document.querySelector('.burger');
    
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('menu--active');
            menuBtn.classList.toggle('active');
    
            if (menu.classList.contains('menu--active')){
                document.querySelector('.wrapper').style.overflow =  `hidden`;
                document.querySelector('.wrapper').style.height =  `100vh`;
            } else {
                document.querySelector('.wrapper').style.overflow = `scroll`;
            }
        });
    
        menu.addEventListener('click', function (e) {
            if (menu.classList.contains('menu--active') && e.target.classList.contains('menu__item-link')){
                menu.classList.toggle('menu--active');
                menuBtn.classList.toggle('active');
                document.querySelector('.wrapper').style.overflow = `scroll`;
            }
        })
    
    })();

});