$(document).ready(function(){

    const openItem = item =>{
        const container = item.closest('.team__item');
        const contentBlock = container.find('.team__content');
        const textBlock = contentBlock.find('.team__content-block');
        const reqHeight = textBlock.height();
        console.log(reqHeight);

        container.addClass('active');
        contentBlock.height(reqHeight);

    }

    const closeItem = container =>{
        const items = container.find('.team__content');
        const itemContainer = container.find('.team__item');

        itemContainer.removeClass('active');
        items.height(0);
    }

    $('.team__name').click(e =>{
        const $this = $(e.currentTarget);
        console.log(e);
        const container = $this.closest('.team');
        const elemContainer = $this.closest('.team__item');

        if (elemContainer.hasClass('active')){
            closeItem(container);
        } else {
            closeItem(container);
            openItem($this);
        }
        $this.toggleClass('active');
    });

});


