// ;(function(){

// })
$('.sizes__item').click(e =>{
    const itemName = $(e.currentTarget);
    const desc = itemName.find('.sizes__item-desc');
    
    if(!$(desc).hasClass('active')){
        $('.sizes__item-desc').removeClass('active');
        desc.addClass('active');
        
    } else{
        $('.sizes__item-desc').removeClass('active');
        desc.addClass('active');
        if($(desc).hasClass('active')){
            desc.toggleClass('active'); 
        }
    };
    
});