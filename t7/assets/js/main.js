/* Функции */
let news = [];

let inputTitle = document.querySelector('.inputTitle');
let inputText = document.querySelector('inputText');
let button = document.querySelector('.button');
let newsPlace = document.querySelector('.news');

function showNews (){
    newsPlace.innerHTML = '';
    news.forEach(element =>{
        newsPlace.innerHTML += `
            <div class="newss">
                <h2>${element.title}</h2>
                <p>${element.text}</p>
            </div>
        `
    })
}

function addNews(){
    let object = {
        title:inputTitle.value,
        text:inputText.value
    }
    news.push(object)
    console.log(news)
    inputTitle.value = ''
    inputText.value = ''

    showNews()
}

button.addEventListener('click',addNews)