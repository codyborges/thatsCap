//DOM variables 
let input = document.querySelector('.text')
let subBtn = document.querySelector('.sub')
let answer = document.querySelector('.answer')
console.log(input, subBtn, answer)

//Event Listener
subBtn.addEventListener('click', cap)

//Function
function cap(){
let bigCap = input.value.toUpperCase()
answer.innerHTML = bigCap
answer.style.fontSize = '30px'
console.log(bigCap)
}