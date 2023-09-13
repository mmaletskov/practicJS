const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const umnoBtn = document.querySelector('.umno')
const delBtn = document.querySelector('.del')
const submitBtn = document.querySelector('.submitBtn')
const resultEl = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function (){
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
umnoBtn.onclick = function () {
    action = '*'
}
delBtn.onclick = function () {
    action = '/'
}

submitBtn.onclick = function () {
    if (action === '+' ){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        resultEl.textContent = sum
    } else if (action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        resultEl.textContent = sum
    }else if (action === '*'){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        resultEl.textContent = sum
    }else if (action === '/'){
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        resultEl.textContent = sum
    }
}