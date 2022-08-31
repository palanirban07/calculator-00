let display = document.querySelector('.display');
let one = document.querySelector(".one");
let clr = document.querySelector('.clr');
let divide = document.querySelector('.divide');
let multi = document.querySelector('.multi');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let minus = document.querySelector('.minus');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let plus = document.querySelector('.plus');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let zero = document.querySelector('.zero');
let zero2 = document.querySelector('.zero2');
let dot = document.querySelector('.dot');
let equal = document.querySelector('.equal');

one.onclick = ()=>{
    display.innerText += 1
}
two.onclick= ()=>{
    display.innerText += 2
}
three.onclick= ()=>{
    display.innerText += 3
}
four.onclick= ()=>{
    display.innerText += 4
}
five.onclick= ()=>{
    display.innerText += 5
}
six.onclick= ()=>{
    display.innerText += 6
}
seven.onclick= ()=>{
    display.innerText += 7
}
eight.onclick= ()=>{
    display.innerText += 8
}
nine.onclick= ()=>{
    display.innerText += 9
}
zero.onclick= ()=>{
    display.innerText += 0
}
zero2.onclick= ()=>{
    display.innerText += "00"
}
clr.onclick= ()=>{
    display.innerText = ""
}
plus.onclick= ()=>{
    let lastchar = display.innerText[display.innerText.length -1]
    if(lastchar != "+"){
        display.innerText +="+"
    }
}
minus.onclick= ()=>{
    let lastchar = display.innerText[display.innerText.length -1]
    if(lastchar != "-"){
        if(lastchar != '+'){
            display.innerText +="-"
        }   
    }
}
multi.onclick= ()=>{
    let lastchar = display.innerText[display.innerText.length -1]
    if(lastchar != "*"){
        display.innerText +="*"
    }
}
divide.onclick= ()=>{
    let lastchar = display.innerText[display.innerText.length -1]
    if(lastchar != "/"){
        display.innerText +="/"
    }
}
dot.onclick= ()=>{
    let lastchar = display.innerText[display.innerText.length -1]
    if(lastchar != "."){
        display.innerText +="."
    }
}

equal.onclick = ()=>{
    let plus_index = display.innerText.indexOf('+')
    let minus_index = display.innerText.indexOf('-')
    let multi_index = display.innerText.indexOf('*')
    let divide_index = display.innerText.indexOf('/')

    if (plus_index != -1){
        arr = display.innerText.split("+")
        result = plusFunc(arr[0], arr[1])
        display.innerText = result
    }
    if (minus_index != -1){
        arr = display.innerText.split('-')
        result = minusFunc(arr[0], arr[1])
        display.innerText = result
    }
    if (multi_index != -1){
        arr = display.innerText.split('*')
        result = multiFunc(arr[0], arr[1])
        display.innerText = result
    }
    if (divide_index != -1){
        arr = display.innerText.split('/')
        result = divideFunc(arr[0], arr[1])
        display.innerText = result
    }
}

function plusFunc(x,y){
    return Number(x) + Number(y)
}
function minusFunc(x,y){
    return Number(x) - Number(y)
}
function multiFunc(x,y){
    return Number(x) * Number(y)
}
function divideFunc(x,y){
    return Number(x) / Number(y)
}
