let newList = [1]
let 
function numberOnClick() {
    console.log(this);
}
document.addEventListener('DOMContentLoaded', function(){
    let digitBtns = document.getElementsByClassName('digit');

    for ( let i=0; i<digitBtns.length; i++) {
        digitBtns[i].addEventListener('click',numberOnClick)
    }
}
)


let myClass = document.querySelector(".myclass");
let digitBtn = document.querySelector("div#calculator p.digit.zero");
let digitBtns = document.querySelectorAll("div#calculator p.digit");

function id(id) {
    return document.getElementById(id);
 }
 
 function qs(selector) {
   return document.querySelector(selector);
 }
 
 function qsa(selector) {
   return document.querySelectorAll(selector);
 }

 function operatorOnClick() {
    console.log(this);
}
document.addEventListener('DOMContentLoaded', function(){
    let digitBtns = document.getElementsByClassName('operators');

    for ( let i=0; i<digitBtns.length; i++) {
        digitBtns[i].addEventListener('click',operatorOnClick)
    }
}
)

let outputValue= document.getElementById("displayValue");
newList.innerHTML=outputValue;