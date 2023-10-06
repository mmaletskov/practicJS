const menuLi = document.querySelectorAll('.menu__item');
menuLi.forEach(element => {
    element.addEventListener('mouseover',()=> {
        const sub_menu = element.querySelector('.sub_menu');
        sub_menu.style.display = 'block';
    })
});
menuLi.forEach(element => {
    element.addEventListener('mouseout',()=> {
        const sub_menu = element.querySelector('.sub_menu');
        sub_menu.style.display = 'none';
    })
});