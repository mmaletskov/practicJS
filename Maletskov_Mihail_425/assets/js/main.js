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
let slider = document.querySelector('.slider');
let prevButt = document.querySelector('.prev__button');
let nextButt = document.querySelector('.next__button');
let slides = Array.from(slider.querySelectorAll('.slider__item'));
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

// вкладки
const buttons = document.querySelectorAll('.tabs__header-button');
const tabs = document.querySelectorAll('.tabs__body');

for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click',()=>{
        for(let y = 0; y < tabs.length; y++){
            if(x == y){
                tabs[y].classList.add('body__active');
                buttons[y].classList.add('button__active');
                console.log('dskfkjfh')
            }
            else{
                tabs[y].classList.remove('body__active');
                buttons[y].classList.remove('button__active');
                console.log('kdfs')
            }
        }
        buttons[x].classList.add('.button__active');
    })
}

document.addEventListener('DOMContentLoaded', () =>{
    const blocks = document.querySelectorAll('.block')
    const phoneBlock = document.querySelector('.phone-block')
  
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight
  
        const scrollPosition = window.scrollY
  
        const blokHeight = blocks[1].clientHeight
  
        const blokMidlle = blocks[1].offsetTop + blokHeight / 2
  
        if(scrollPosition + windowHeight >= blokMidlle){
            phoneBlock.style.display = 'flex'
        }else{
            phoneBlock.style.display = 'none'
        }
    })
  })

  // аккордион
let btns = document.querySelectorAll('.menu__title-btn');
let accordions = document.querySelectorAll('.menu__text');

btns.forEach((button, index) => {
    const accordion = accordions[index];

    button.addEventListener('click',()=>{
        accordion.classList.toggle('show');
    })
})


function call() {
    alert('Отложенный вызов не успел стилизовать, простите');
  }
  
  setTimeout(call, 15000);