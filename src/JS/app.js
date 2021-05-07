$(document).ready(function () {

    const myForm = document.querySelector('.form');
    const btn = document.querySelector('.form__btn');
    
    myForm.addEventListener('submit', e =>{
        e.preventDefault();
        console.log('e')
        const valid = validateForm(myForm);
        if(valid){
            const data ={
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                comment: myForm.elements.comment.value,
                to: 'test@mail.ru' 
            };

        const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () =>{
                $.fancybox.open({
                    src: "#modal",
                    // type: "inline"
                });

                if(xhr.response.status){
                    $('.modal__title').text(xhr.response.message)
                    console.log('ok');
                } else{
                    $('.modal__title').text(xhr.response.message)
                    console.log('ne ok');
                }
                
            });
        }
    });
    
    function validateForm(form){
        for(let el of form.elements){
            if(!validateChecked(el)){
                return false;
            };
        };
        return true;
    };
    function validateChecked(checked){   
        if(!checked.value && checked.tagName !== 'button'){
            checked.classList.add('false');
            return false;
        };
        checked.classList.remove('false');
        return true;  
        
    }
    $('.btn__modal-js').click( e =>{
        e.preventDefault();

        $.fancybox.close();
    }); 
    
});
    