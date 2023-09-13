let news = [
    {
        newsId:1,
        newsName:'Мосбиржа приостановила торги на срочном рынке',
        descrNews: '"Торги на срочном рынке приостановлены с 09:30:00", — отмечается в сообщении.',
        newsAuthor: 'Максим',
        newsDate: '01.01.2023'
    },
    {
        newsId:2,
        newsName:'Правительство Японии ушло в отставку',
        descrNews:'Правительство Японии в полном составе ушло в отставку, премьер-министр Фумио Кисида принял прошения своих министров, сообщило агентство Киодо.',
        newsAuthor: 'Николай',
        newsDate: '01.01.2023'
    },
    {
        newsId:3,
        newsName:'В МТС озвучили цену предзаказа нового iPhone 15',
        descrNews:'Цены в России на новые смартфоны iPhone 15 по предзаказу начинаются от 125 тысяч рублей, на часы Apple Watch — от 35 тысяч рублей, рассказали РИА Новости в МТС.',
        newsAuthor:'Дмитрий',
        newsDate: '01.01.2023'
    }
]
newsPlace = document.querySelector('.news');
news.forEach(element => {
    html = `
        <div class = "news__item">
            <div class = "news__item-title">
                <h2>${element.newsName}</h2>
                <p>${element.newsDate}</p>
            </div>
            <p>${element.descrNews}</p>
            <p>${element.newsAuthor}</p>
        </div>
    `
    newsPlace.innerHTML += html;
})