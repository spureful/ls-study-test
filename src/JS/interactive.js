$(document).ready(function(){

    const findBlock = (block) =>{
        return $('.reviews__display-inner').filter((ndx, item) => $(item).attr('data-item') === block);

        
    }

    $('.interactive-avatar__link').on('click', e =>{
        const $this = $(e.currentTarget);
        const target = $this.attr('data-open');
        console.log(target);
        const itemShow = findBlock(target);
        const curItem = $this.closest('.interactive-avatar');

        itemShow.addClass('active').siblings().removeClass('active'); 
        curItem.addClass('active').siblings().removeClass('active');

    });

});