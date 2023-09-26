let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

let news = [];

let title = document.querySelector('.form-elem');
let text = document.querySelector('.textarea');
let news_wrapper = document.querySelector('.news-wrapper');
let btn = document.querySelector('.send');



function showNews(){
    news_wrapper.innerHTML = '';
    news.forEach(element =>{
        news_wrapper.innerHTML += `
        <div class="news-item">
            <h3>${element.title}</h3>
            <p class="news-item__p">${element.text}</p>
        </div>
        `
    })
}

function addNews(){

    if(title.value == ""){
        alert("Введите заголовок новости");

    }   
    else if(title.value.length < 8){
        alert("Кол-во символов не может быть меньше 8")
    }
    else if(text.value == ""){
        alert("Введите тект новости")
    }
    else if(text.value.length > 300){
        alert("Текст новости не может превышать более 300 символов")
    }
    else{
        let object = {
            title:title.value,
            text:text.value,
        }
        news.push(object)
        console.log(news)
        title.value = ''
        text.value = ''

    
        showNews()
    }
   
}

btn.addEventListener('click',addNews);


// изменение цвета фона
document.addEventListener('keyup',function(event){
    if('b' == event.key.toLowerCase()){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else if('w' == event.key.toLowerCase()){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})