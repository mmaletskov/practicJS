let news = [
    {
        newsId:1,
        newsName:'Мосбиржа приостановила торги на срочном рынке',
        descrNews: '"Торги на срочном рынке приостановлены с 09:30:00", — отмечается в сообщении.'
    },
    {
        newsId:2,
        newsName:'Правительство Японии ушло в отставку',
        descrNews:'Правительство Японии в полном составе ушло в отставку, премьер-министр Фумио Кисида принял прошения своих министров, сообщило агентство Киодо.'
    },
    {
        newsId:3,
        newsName:'В МТС озвучили цену предзаказа нового iPhone 15',
        descrNews:'Цены в России на новые смартфоны iPhone 15 по предзаказу начинаются от 125 тысяч рублей, на часы Apple Watch — от 35 тысяч рублей, рассказали РИА Новости в МТС.'
    }
]
newsPlace = document.querySelector('.news');
news.forEach(element => {
    html = `
        <div class = "news__item">
            <h2>${element.newsName}</h2>
            <p>${element.descrNews}</p>
        </div>
    `
    newsPlace.innerHTML += html;
})