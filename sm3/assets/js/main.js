const buttonsEl = document.querySelectorAll('.button');
const accordionsEl = document.querySelectorAll('.accordion');

buttonsEl.forEach((button, index) => {
    const accordion = accordionsEl[index]

    button.addEventListener('click', ()=>{
        accordion.classList.toggle('show');

        if(accordion.classList.contains('show')){
            button.style.transform = 'rotate(180deg)';
        }
        else{
            button.style.transform = 'rotate(0)';
        }
    })
})