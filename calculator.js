let newList = [""]
let numberClick = true
let inputValue = 0
let dotted = false
let previous_operator = ""
let Math_error = false


function numberOnClick() {
  if (Math_error==false){
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
    else {
    newList=""
    console.log(this);
    let magicNum = this.innerHTML;
    let outputValue = document.getElementById('displayValue');
    newList += magicNum;
    outputValue.innerHTML = newList;
    numberClick = true;
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('digit');

  for (let i = 0; i < digitBtns.length; i++) {
    digitBtns[i].addEventListener('click', numberOnClick)
  }
})

function dotOnClick() {
  if (Math_error==false){
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
    else
    {
      newList="0"
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
}  
  dotted = true
  return dotted, numberClick
}

document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('dot');
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
if (Math_error==false)
  {
    if (numberClick==true)
    {
      console.log(this);
      let inputoperator = this.innerHTML;
      let Value = document.getElementById('displayValue');
      let NewValue = Value.innerHTML
      console.log(inputoperator)
      console.log(NewValue)
      
      { if (previous_operator == "+")
          {
            let result = parseFloat(inputValue) + parseFloat(NewValue);
            previous_operator = inputoperator;
            Value.innerHTML = ""+result
            inputValue=result
            numberClick=false
          }
        else if (previous_operator == "-")
          {
            let result = parseFloat(inputValue) - parseFloat(NewValue);
            previous_operator = inputoperator;
            Value.innerHTML = ""+result
            inputValue=result
            numberClick=false
          }
        else if (previous_operator == "x")
          {
            let result = parseFloat(inputValue) * parseFloat(NewValue);
            previous_operator = inputoperator;
            Value.innerHTML = ""+result
            inputValue=result
            numberClick=false
          }
        else if (previous_operator == "/")
          {  if (parseFloat(NewValue) !=0)
            {
              let result = parseFloat(inputValue) / parseFloat(NewValue);
              previous_operator = inputoperator;
              Value.innerHTML = ""+result
              inputValue=result
              numberClick=false
            }
            else
            { let result = "Math Error!";
              Value.innerHTML = ""+result
              Math_error=true
            }
          }
        else
          {
            previous_operator = inputoperator;
            inputValue=NewValue;
            numberClick=false;
          }
      }
    }
    else
    {
      let inputoperator = this.innerHTML;
      previous_operator = inputoperator;
    }
  }
  dotted = false
  return dotted, numberClick
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

function clearOnClick(){
  console.log(this);
  let magicNum = this.innerHTML;
  let outputValue = document.getElementById('displayValue');
  newList = 0;
  outputValue.innerHTML = newList;
  numberClick = true;
  dotted = false;
  Math_error=false;
  inputValue=0;
}

document.addEventListener('DOMContentLoaded', function() {
  let digitBtns = document.getElementsByClassName('clear');
  let read_operator = this.innerHTML;
  inputValue = document.getElementById('displayValue');
  for (let i = 0; i < digitBtns.length; i++) {
    digitBtns[i].addEventListener('click', clearOnClick)
  }
})




