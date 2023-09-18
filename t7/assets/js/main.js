/* Функции */
let news = [];

let inputTitle = document.querySelector('.inputTitle');
let inputText = document.querySelector('.inputText');
let inputDate = document.querySelector('.inputDate');
let button = document.querySelector('.button');
let newsPlace = document.querySelector('.news');

function showNews (){
    newsPlace.innerHTML = '';
    news.forEach(element =>{
        newsPlace.innerHTML += `
            <div class="newss">
                <h2>${element.title}</h2>
                <p>${element.text}</p>
                <p>${element.date}</p>
            </div>
        `
    })
}

function addNews(){
    let object = {
        title:inputTitle.value,
        text:inputText.value,
        date:inputDate.value
    }
    news.push(object)
    console.log(news)
    inputTitle.value = ''
    inputText.value = ''
    inputDate.value = ''

    showNews()
}

button.addEventListener('click',addNews)