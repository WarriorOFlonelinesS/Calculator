// the first, second, math sign and finishing of a operation 
let a = '', 
    b = '', 
    sign = ''; 
    finish = false; 

//  containers with digits and signs for parsing
const digit = ["0", "1", "2","3", "4", "5", "6", "7", "8", '9','.']; 
const action = ['-', '×', '÷','+','%'];

// dispalay
const out = document.querySelector('p');

// function of clearing of the display and set a default font 
function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false
  out.textContent = 0;
  out.style.fontSize = "50px"
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
  
  // button isn't pressing  
  if(!event.target.classList.contains('btn')) return;
  
  // button ClearAll is pressing
  if(event.target.classList.contains('ac')) return;
  out.textContent = "";
  
  // parssing digits and signs from the HTML file
  const key = event.target.textContent;
  if(digit.includes(key)){
    if (b =="" && sign === ''){
    a+=key;
  
   // if amount of symbols in the display more 12, the inputing is impossible 
    if (a.length<12){
    out.textContent = a
    }else{
      out.textContent =  a.substring(0,11)
    }
        
  }else if (a!=='' && b!=='' && finish){
      b = key;
      finish = false;
      out.textContent = 0;
  }
   else{
    b+=key;
    if (b.length<12){
      out.textContent = Number(b);
    }else{
      b=b.substring(0,11)
      out.textContent = b
    }
  }
   return;
}
  if (action.includes(key)){
    sign = key;
    out.textContent = sign;
   
    return;
  }
  
// if the button with sign "=" was pressed
if(key === '='){
  if (b === '' ) b = a;
  switch(sign){
    case "÷":
      a = (Number(a)) / (Number(b));
      a = String(a)
      break;
    case "×":
        a = (Number(a)) * (Number(b));
        a = String(a)
    break
    case "-":
      a = (Number(a)) - (Number(b));
      a = String(a)
      break
    case "+":
      a = (Number(a)) + (Number(b));
      a = String(a)
      break
    case "%":
      a = Number(a)/100;
      a = String(a)
      b = a
      out.textContent = a
      finish = true
      break
      }
      finish = true;
    // if length of the output is more 12, font size 24px
      if (a.length<12){
        out.style.fontSize = "50px"}
      else{
        out.style.fontSize = "24px"
      }
      out.textContent = a;
        
}
    
// button Backspase is pressed
if (key === '←'){
  // for the first number
  if (b === ''){
  a = a.substring(0, a.length - 1)
  out.textContent = Number(a)
  if (a.length == 0){
    clearAll()
  }
  // for the second number
  }else{
    b = b.substring(0, b.length - 1)
    out.textContent =Number(b)
    if (b.length == 0){
    a 
    }
  }
}
}


 
