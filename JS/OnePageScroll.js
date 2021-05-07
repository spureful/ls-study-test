// const wrapper = document.querySelector('.wrapper');
// const section = document.querySelectorAll('.section');

// let spin_value = 0;
// let canScroll = true;

// window.addEventListener('mousewheel', e =>{
//     if(canScroll){

//         canScroll = false;

//         if (e.deltaY > 0){
//             if (spin_value < section.length-1) spin_value += 1;
//         } else {
//             if (spin_value > 0) spin_value -= 1;
//         }
//         scrollContent(spin_value);
//     }
//     setTimeout(() =>{
//         canScroll = true;
//     }, 500);
// });

// function scrollContent (count){
//     wrapper.setAttribute('style', `transform: translateY(-${count * 100}vh`)
//     console.log(wrapper);
// };
