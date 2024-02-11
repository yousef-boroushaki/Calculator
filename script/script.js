let num = document.querySelector("#num");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let btnResetFirst = document.querySelector(".btn-first-reset");

btnResetFirst.addEventListener('click' , () =>{
    num.value = "";
    result.innerHTML = "";
})

btn.addEventListener('click' , ()=>{

    if(parseInt(num.value) % 2 == 0)
        result.innerHTML = "Your number that you entered is even";
    else if(parseInt(num.value) % 2 != 0)
        result.innerHTML = "Your number that you entered is odd";

})

// #######################################################################333

let inputIf1 = document.querySelector(".if-input1");
let inputIf2 = document.querySelector(".if-input2");
let result2 = document.querySelector(".result2");
let btnIf = document.querySelector(".btn-condition");
let btnIfReset = document.querySelector(".btn-condition-reset");

btnIfReset.addEventListener('click' , () =>{
    inputIf1.value = "";
    inputIf2.value = "";
    result2.innerHTML = "";
})

btnIf.addEventListener('click', ()=>{

    if(parseInt(inputIf1.value) > parseInt(inputIf2.value))
        result2.innerHTML = "First number is larger than second number";
    else if(parseInt(inputIf1.value) < parseInt(inputIf2.value))
        result2.innerHTML = "Second number is larger than first number";
    else if(parseInt(inputIf1.value) == parseInt(inputIf2.value))
        result2.innerHTML = "First number is equal to second number";

})

// #####################################################################

let input4 = document.querySelector(".input4");
let input5 = document.querySelector(".input5");
let result3 = document.querySelector(".result3");
let btn3 = document.querySelector(".third-btn");
let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let btnMultipy = document.querySelector(".btn-multipy");
let btnDivide = document.querySelector(".btn-divide");
let btnModule = document.querySelector(".btn-modules");

btnPlus.addEventListener('click', ()=>{
    result3.innerHTML = parseInt(input4.value) + parseInt(input5.value);
})
btnMinus.addEventListener('click', ()=>{
    result3.innerHTML = parseInt(input4.value) - parseInt(input5.value);
})
btnMultipy.addEventListener('click', ()=>{
    result3.innerHTML = parseInt(input4.value) * parseInt(input5.value);
})
btnDivide.addEventListener('click', ()=>{
    result3.innerHTML = parseInt(input4.value) / parseInt(input5.value);
})
btnModule.addEventListener('click', ()=>{
    result3.innerHTML = parseInt(input4.value) % parseInt(input5.value);
})

btn3.addEventListener('click' , () =>{
    input4.value = "";
    input5.value = "";
    result3.innerHTML = "";
})