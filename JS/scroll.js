function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
const menuItems = document.querySelectorAll('.menu__item-link');
const accordion = document.querySelectorAll('.accordion');

function scrollMenu (item){

    for(let i = 0; i < item.length; i++){
        item[i].addEventListener('click', e =>{
            e.preventDefault();
            console.log(e.target.getAttribute('href').substr(1));
        });
    }
    return item;
}

console.log(scrollMenu(menuItems));