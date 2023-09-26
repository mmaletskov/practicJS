let in_name = document.getElementById("input1");
let in_date = document.getElementById("input2");
let err = document.getElementById("err");
let isErr;
let btn = document.getElementById("button");
let form = document.getElementById("inputs");
let link = document.getElementById("link");




// function length_name(){
//     if(input.value.length < 2){
//         input.style.boxShadow = '0 0 0 3px red';
//         err.insertAdjacentHTML('beforeend','не должно быть менее 2 символов');
//         isErr = true;
//     }
//     else{
//         input.style.boxShadow = '0 0 0 3px green';
//         isErr = false;
//         err.textContent = '';
//     }

//     if(isErr == true){
//         button.setAttribute("disabled","disabled")
//         button.style.padding = "10px 20px";
//         button.style.borderRadius = "10px";
//         button.style.border = "none";
//         button.style.backgroundColor = "gray";
//         button.style.color = "white";
//     }
//     if(isErr == false){
//         button.removeAttribute("disabled","disabled");
//         button.style.padding = "10px 20px";
//         button.style.borderRadius = "10px";
//         button.style.border = "none";
//         button.style.backgroundColor = "black";
//         button.style.color = "white";
//     }
// }

// function length_date(){
//     if(input_two.value.length < 4 || input_two.value.length > 4){
//         input_two.style.boxShadow = '0 0 0 3px red';
//         err.insertAdjacentHTML('beforeend','не должно быть более 4 символов');
//         isErr = true;
//     }
//     else {
//         input_two.style.boxShadow = '0 0 0 3px green';
//         isErr = false;
//         err.textContent = '';
        
//     }
//     if(isErr == true){
//         button.setAttribute("disabled","disabled");
//         button.style.padding = "10px 20px";
//         button.style.borderRadius = "10px";
//         button.style.border = "none";
//         button.style.backgroundColor = "gray";
//         button.style.color = "white"
//     }
//     if(isErr == false){
//         button.removeAttribute("disabled","disabled");
//         button.style.padding = "10px 20px";
//         button.style.borderRadius = "10px";
//         button.style.border = "none";
//         button.style.backgroundColor = "black";
//         button.style.color = "white"
//     }
// }

// document.addEventListener('keyup',length_name);
// document.addEventListener('keyup',length_date);


form.addEventListener('submit',function(event){
    event.preventDefault()
    if(in_name.value == ""){
        err.insertAdjacentHTML('beforeend','Заполните поле с именем<br>');
        in_name.style.boxShadow = "0 0 2px 3px red";
        isErr = true;

    }else if(in_name.value.length < 2){
        err.insertAdjacentHTML('beforeend','Имя должно быть больше 2<br>');
        in_name.style.boxShadow = "0 0 2px 3px red";
        isErr = true;
    }
    else{
        in_name.style.boxShadow = "0 0 2px 3px green";
        err.innerHTML = "";
        isErr = false;
    }

       
    if(in_date.value == ""){
        err.insertAdjacentHTML('beforeend','Заполните поле с датой<br>');
        in_date.style.boxShadow = "0 0 2px 3px red";
        

    }else if(in_date.value.length < 4 || in_date.value.length > 4 ){
        err.insertAdjacentHTML('beforeend','В дате должно быть 4 значения<br>');
        in_date.style.boxShadow = "0 0 2px 3px red";
        isErr = true;
    }
    else if((2023 - in_date.value) < 18){
        err.insertAdjacentHTML('beforeend','Вам не 18 лет');
        in_date.style.boxShadow = "0 0 2px 3px red";
    
    }
    else{
        link.insertAdjacentHTML('beforeend','https://learn.z-go.ru/index.php?p=learn');
        in_date.style.boxShadow = "0 0 2px 3px green";
        isErr = false;
    }   



})


