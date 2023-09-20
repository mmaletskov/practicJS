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

let block = document.querySelector('.block');
block.addEventListener("mouseover",setColor);
block.addEventListener("mouseout",setColor);


let button = document.querySelector('.button');
button.addEventListener("mousedown",clik);
button.addEventListener("mouseup",clik);