let b = prompt('Введите значение');

// while(a<=b){
//     console.log(a)
//     a++
// }

// рисуем кубики
let box = ' <div class="box"></div>';
let box__list = document.querySelector('.box__list');


// вставка кубиков
for(let a = 0;a<b;a++){
    box__list.insertAdjacentHTML('beforeend',box);
}