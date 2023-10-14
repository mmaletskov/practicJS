// вкладки
const buttons = document.querySelectorAll('.tabs__header-button');
const tabs = document.querySelectorAll('.tabs__body');

for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click',()=>{
        for(let y = 0; y < tabs.length; y++){
            if(x == y){
                tabs[y].classList.add('body__active');
                buttons[y].classList.add('button__active');
            }
            else{
                tabs[y].classList.remove('body__active');
                buttons[y].classList.remove('button__active');
            }
        }
        buttons[x].classList.add('button__active');
    })
}