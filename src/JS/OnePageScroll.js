
const wrapper = $('.maincontent');
const sections = $('.section');
const fixedMenu = $('.fixed-menu');
const menuItems = fixedMenu.find('.fixed-menu__item');

sections.first().addClass('active');

let inScroll = false;

const countSectionPosition = sectionEq =>{
    return sectionEq * -100;
};

const changeMenuTheme = sectionEq =>{
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-fixedMenu-color');

    if(menuTheme === 'black'){
        fixedMenu.addClass('fixed-menu--shadowed');
    } else{
        fixedMenu.removeClass('fixed-menu--shadowed');
    }
};

const resetActiveClassForItem = (items, itemEq, activeClass) =>{
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
};
const performTransition = sectionEq =>{

    if(inScroll === false){
        inScroll = true;

        const position = countSectionPosition(sectionEq);

        changeMenuTheme(sectionEq);

        wrapper.css({
            transform: `translateY(${position}%)`
        });

        resetActiveClassForItem(sections, sectionEq, 'active');
        resetActiveClassForItem(menuItems, sectionEq, 'fixed-menu__item--active');

        setTimeout(() =>{
            inScroll = false;
        }, 600);
    }

};

const scrollViewport = direction =>{

    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'next' && nextSection.length){
        performTransition(nextSection.index());
    }
    if (direction === 'prev' && prevSection.length){
        performTransition(prevSection.index());
    }
};

$(window).on('wheel', e =>{
    const deltaY = e.originalEvent.deltaY;
    console.log(deltaY)

    if (deltaY > 0){
        scrollViewport('next');
    }
    if (deltaY < 0){
        scrollViewport('prev');
    } 

});

$(window).on('keydown', e =>{

    const tagName = e.target.tagName.toLowerCase();

    if(tagName !== 'input' && tagName !== 'textarea'){
        switch(e.keyCode){
            case 38:
                scrollViewport('prev');
                break;
            case 40:
                scrollViewport('next');
                break;
        }
    }

});
$('[data-scroll-to]').click(e =>{
    e.preventDefault();

    const attribute = $(e.currentTarget);
    const target = attribute.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index())
});
$('body').swipe( {

    swipe:function(event, direction) {
        alert(direction)
        const scroller = viewportScroller();
        let scrollDirection = '';
      
      if (direction === 'up'){
        scrollDirection = 'next';
      }
      if (direction === 'down'){
        scrollDirection = 'prev';
      }

      scroller[scrollDirection]();
    }
});

























// let spin_value = 0;
// let canScroll = true;

// window.addEventListener('mousewheel', e =>{
//     if(canScroll){

//         canScroll = false;

//         if (e.deltaY > 0){
//             if (spin_value < section.length) spin_value += 1;
//         } else {
//             if (spin_value > 0) spin_value -= 1;
//         }
//         scrollContent(spin_value);
//     }
//     setTimeout(() =>{
//         canScroll = true;
//     }, 1000);
// });

// function scrollContent (count){
//     wrapper.setAttribute('style', `transform: translateY(-${count * 100}vh`)
//     console.log(wrapper);
// };
