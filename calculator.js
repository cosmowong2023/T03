let newList = [""]
let numberClick = true
let inputValue = 0
let dotted = false

function numberOnClick() {
  if (numberClick==true)
  {
    if (newList!="0")
    {
      console.log(this);
      let magicNum = this.innerHTML;
      let outputValue = document.getElementById('displayValue');
      newList += magicNum;
      outputValue.innerHTML = newList;
      numberClick = true;
    }
    if (newList=="0")
    {
      console.log(this);
      let magicNum = this.innerHTML;
      let outputValue = document.getElementById('displayValue');
      newList = magicNum;
      outputValue.innerHTML = newList;
      numberClick = true;
    }
  }
  return newList
}
document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('digit');

  for (let i = 0; i < digitBtns.length; i++) {
    digitBtns[i].addEventListener('click', numberOnClick)
  }
})

function dotOnClick() {
  if (numberClick==true)
  {
      console.log(this);
      let inputdot = this.innerHTML;
      let outputValue = document.getElementById('displayValue');
      if (dotted==false)
      {
        newList += inputdot;
        outputValue.innerHTML = newList;
        numberClick = true;
      }
  }
  dotted = true
  return dotted, numberClick
}

document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('dot');
  let dotv = this.innerHTML;
  let inputValue = document.getElementById('displayValue');
  for (let i = 0; i < digitBtns.length; i++) {
    digitBtns[i].addEventListener('click', dotOnClick)
  }
})

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
document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('operators');
  let read_operator = this.innerHTML;
  inputValue = document.getElementById('displayValue');
  for (let i = 0; i < digitBtns.length; i++) {
    digitBtns[i].addEventListener('click', operatorOnClick)
  }
})

