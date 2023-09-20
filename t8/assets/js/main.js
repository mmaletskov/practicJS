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