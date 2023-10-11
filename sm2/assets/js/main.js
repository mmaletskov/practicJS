const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev__button');
const nextButton = document.querySelector('.next__button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// обработчики событий для кнопок
prevButton.addEventListener('click',showPrevSlide);
nextButton.addEventListener('click',showNextSlide);

// функция для показа предыдущего слайда

function showPrevSlide(){
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// функция для показа следующего слайда
function showNextSlide(){
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

// Инициализация слайдера
updateSlider();