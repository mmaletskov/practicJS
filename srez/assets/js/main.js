let news = [];


let title = document.getElementById('title');
let author = document.getElementById('author');
let btn = document.getElementById('add-btn');
let news_wrapper = document.querySelector('.news__list');
let date = new Date();
let day = date.getDate();


function showNews(){
    news_wrapper.innerHTML = '';
    news.forEach(element =>{
        news_wrapper.innerHTML += `
        <div class="news__item">
        <img src="./assets/img/news_image.png" alt="">
        <h3 class="news__item-title">${element.title}</h3>
        <p class="news__item-status">Опубликована</p>
        <div class="news__item-info">
            <div class="info__info">
                <p>${day + " сентября"}</p>
                <p>${element.author}</p>
            </div>
            <div class="btns">
                <a href=""><img src="./assets/img/accept.svg" alt=""></a>
                <a href=""><img src="./assets/img/cancel.svg" alt=""></a>
            </div>
        </div>
    </div>
        `
    })
}


function addNews(){

    if(title.value == ""){
        alert("Введите заголовок новости");

    }   
    else if(title.value.length < 8){
        alert("Кол-во символов не может быть меньше 5")
    }
    else if(author.value == ""){
        alert("Введите тект автора")
    }
    else if(author.value.length < 5){
        alert("Текст новости не может превышать более 5 символов")
    }
    else{
        let object = {
            title:title.value,
            author:author.value,
        }
        news.push(object)
        console.log(news)
        title.value = ''
        author.value = ''

    
        showNews()
    }
   
}

btn.addEventListener('click',addNews);



    
function setColor(e){
    if(e.type === "mouseover"){
        e.target.style.backgroundColor = "red";
        
    }
    else if(e.type === "mouseout"){
        e.target.style.backgroundColor = "blue";
    }
}

btn.addEventListener("mouseover",setColor);
btn.addEventListener("mouseout",setColor);



// изменение цвета фона
document.addEventListener('keyup',function(event){
    if('d' == event.key.toLowerCase()){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else if('w' == event.key.toLowerCase()){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})