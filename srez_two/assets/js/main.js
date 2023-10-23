// выпадающее меню
let item = document.querySelectorAll('.menu__item');

item.forEach(element=>{
    element.addEventListener('mouseover',()=>{
        let sub__menu = element.querySelector('.sub__menu');
        sub__menu.style.display = 'block';
    })
})
item.forEach(element=>{
    element.addEventListener('mouseout',()=>{
        let sub__menu = element.querySelector('.sub__menu');
        sub__menu.style.display = 'none';
    })
})

// слайдер
 let slider = document.querySelector('.slider__slider');
 let prevButt = document.querySelector('.prev__button');
 let nextButt = document.querySelector('.next__button');
 let slides = Array.from(slider.querySelectorAll('.slider__slider-item'));
 let slideCount = slides.length;
 let slideIndex = 0;

//  обработчики событий 
prevButt.addEventListener('click', ()=>{
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
})
nextButt.addEventListener('click',()=>{
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
})

// функция updateSlider
function updateSlider(){
    slides.forEach((slide,index)=>{
        if(index === slideIndex){
            slide.style.display = 'block';
        }
        else{
            slide.style.display = 'none';
        }
    })
}

// запуск слайдера
updateSlider();




// аккордион
let btns = document.querySelectorAll('.menu__title-btn');
let accordions = document.querySelectorAll('.menu__text');

btns.forEach((button, index) => {
    const accordion = accordions[index];

    button.addEventListener('click',()=>{
        accordion.classList.toggle('show');
    })
})