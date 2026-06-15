const display = document.getElementById("display")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn0 = document.getElementById("btn0")



btn1.addEventListener("click",()=>{
   display.value += "1"
})
btn2.addEventListener("click",()=>{
   display.value += "2"
})
btn3.addEventListener("click",()=>{
   display.value += "3"
})
btn4.addEventListener("click",()=>{
   display.value += "4"
})
btn5.addEventListener("click",()=>{
   display.value += "5"
})
btn6.addEventListener("click",()=>{
   display.value += "6"
})
btn7.addEventListener("click",()=>{
   display.value += "7"
})
btn8.addEventListener("click",()=>{
   display.value += "8"
})
btn9.addEventListener("click",()=>{
   display.value += "9"
})
btn0.addEventListener("click",()=>{
   display.value += "0"
})

// OPERATORS
const btnAdd= document.getElementById("btnAdd")
const btnMinus= document.getElementById("btnMinus")
const btnMultiply= document.getElementById("btnMultiply")
const btnDivide= document.getElementById("btnDivide")

const clear = document.getElementById("clear")
clear.addEventListener("click",()=>{
    display.value = ""
})

btnAdd.addEventListener("click",()=>{
    display.value += "+"
})
btnMinus.addEventListener("click",()=>{
    display.value += "-"
})
btnMultiply.addEventListener("click",()=>{
    display.value += "*"
})
btnDivide.addEventListener("click",()=>{
    display.value += "/"
})

//RESULT
const result = document.getElementById("result")

result.addEventListener("click",()=>{
    // console.log(eval(display.value))
//    const result =  eval(display.value)
   display.value = eval(display.value)
})

// function add(value){
//     display.value+= value
// }
// function add(n1,n2){
//     console.log(n1+n2)
// }

