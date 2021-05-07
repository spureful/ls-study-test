let widthSection = $('.accordion').width();
let widthItem = $('.sizes__item-name').width();

$('.sizes__item').click(e =>{
    const itemName = $(e.currentTarget);
    const desc = itemName.find('.sizes__item-desc');
    
    // if(widthSection <= 768){
    //     desc.css('width', `${widthSection - (widthItem * 3)}px`);
        
    // } else{
    //     desc.css('width', `524px`);        
        
    // }
    if(!$(desc).hasClass('active')){
        $('.sizes__item-desc').removeClass('active');
        desc.addClass('active');
        
    } else{
        $('.sizes__item-desc').removeClass('active');
        desc.addClass('active');
        if($(desc).hasClass('active')){
            desc.toggleClass('active'); 
            // desc.css('width', '0');
        }
    };
    
});
