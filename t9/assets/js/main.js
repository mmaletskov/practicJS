
document.addEventListener('keydown',function(event){
    if('r' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'red'
        
    }
})

document.addEventListener('keyup',function(event){
    if('r' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'white'
        
    }
})


document.addEventListener('keydown',function(event){
    if('g' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'green'
        
    }
})

document.addEventListener('keyup',function(event){
    if('g' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'white'
        
    }
})


document.addEventListener('keydown',function(event){
    if('b' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'blue'
        
    }
})

document.addEventListener('keyup',function(event){
    if('b' == event.key.toLowerCase()){
        let body = document.querySelector('.body');
        body.style.backgroundColor = 'white'
        
    }
})



// часть 2
document.addEventListener('keydown',function(event){
    let move = document.querySelector('.item');
    const style = move.style;
    let modifier = 1;
    switch(event.key){
        case 'w': style.top = `${parseInt(style.top) - modifier}px`; console.log(`${parseInt(style.top) - modifier}px`); break;
        case 's': style.top = `${parseInt(style.top) + modifier}px`; console.log(`${parseInt(style.top) + modifier}px`); break;
        case 'a': style.left = `${parseInt(style.left) - modifier}px`; console.log(`${parseInt(style.left) - modifier}px`); break; 
        case 'd': style.left = `${parseInt(style.left) + modifier}px`; console.log(`${parseInt(style.left) + modifier}px`); break; 
    }
})