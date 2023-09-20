function setColor(e){
    if(e.type === "mouseover"){
        e.target.style.backgroundColor = "red";
    }
    else if(e.type === "mouseout"){
        e.target.style.backgroundColor = "blue";
    }
}

function clik(r){
    if(r.type === "mousedown"){
        r.target.style.backgroundColor = "green";
    }
    else if(r.type === "mouseup"){
        r.target.style.backgroundColor = "coral";
    }
}

function click(t){
    if(t.type === "click"){
        t.target.style.backgroundColor = "orange";
    }
}

function dblclick(o){
    if(o.type === "dblclick"){
        o.target.style.backgroundColor = "darkblue";
        o.target.style.color = "white";
    }
}

function contextMenu(p){
    if(p.type === "contextmenu"){
        p.target.style.backgroundColor = "darkgreen";
    }
}

let block = document.querySelector('.block');
block.addEventListener("mouseover",setColor);
block.addEventListener("mouseout",setColor);


let button = document.querySelector('.button');
button.addEventListener("mousedown",clik);
button.addEventListener("mouseup",clik);

let block__two = document.querySelector('.block__two');
block__two.addEventListener("click",click);

let block__three = document.querySelector('.block__three');
block__three.addEventListener("dblclick",dblclick);

let block__four = document.querySelector('.block__four');

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    block__four.style.backgroundColor = "#" + randomColor;
}
block__four.addEventListener('mousemove', setBg)


let block__five = document.querySelector('.block__five');
block__five.addEventListener("contextmenu",contextMenu);