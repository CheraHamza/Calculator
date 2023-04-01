//operate function
function operate(a,operator,b)
{
    if(operator=='+')
    {
        return(a+b);
    }
    else if(operator=='-')
    {
        return(a-b);
    }
    else if(operator=='x')
    { 
        return(a*b);
    }
    else if (operator=='/')
    {
        if(b==0)
        {
            return('Error');
        }
        if(a%b!=0)
        {
            return((Math.round(a/b * 100) / 100).toFixed(2));
        }
        return(a/b);
        
    }

}
// numbers
const numbers= document.querySelectorAll('.displayed');
// operators
const operatorBtns=document.querySelectorAll('.operator');
// screen
const screen= document.querySelector('.screen');
// =
const res= document.querySelector('.equal');
// AC
const clearBtn=document.querySelector('.clearBtn');
// result '<P>'
const resultP=document.createElement('p');
resultP.classList.add('result');
// intialize some variables
let a=null;
let b=null;
let firstOperator=null;
let secondOperator=null;

// initialise text content
screen.textContent='0';

// function to populate screen
function populate()
{
    resultP.textContent='';
    if(screen.textContent==='0'  || resultP.textContent!=='')
    {
        screen.textContent='';
    }
    if((screen.textContent).length<=13)
        {
            screen.textContent+=this.textContent; 
        }
}
// event listeners for number buttons
numbers.forEach( (number)=> {
    number.addEventListener('click',populate);    
});

// function to reset the screen to '0'
function resetScreen()
{
    screen.textContent='0';
}
// function to clear the screen to ''
function clearScreen()
{
    screen.textContent='';
}
// function to when you click an operator
function excuteOperate()
{
    
    if(firstOperator===null && screen.textContent!=='' && a=== null)
    {
        a=Number(screen.textContent);
        firstOperator=this.textContent;
        clearScreen();
    }
    else
    {
        secondOperator=this.textContent;
        resultP.textContent=''
        b=Number(screen.textContent);
        resultP.textContent=operate(a,firstOperator,b);
        a=operate(a,firstOperator,b);
        b=null;
        firstOperator=secondOperator;
        secondOperator=null;
        clearScreen();
        screen.appendChild(resultP);
}
    
}

// event listeners for operator buttons
operatorBtns.forEach((operatorBtn)=>{
    operatorBtn.addEventListener('click',excuteOperate);
});

// function to calculate the imediate calculation
function calculate()
{
    if (a!==null && resultP.textContent==='')
    {
        b=Number(screen.textContent);
        if(getlength(operate(a,firstOperator,b))>14)
        {
            resultP.textContent= expo(operate(a,firstOperator,b),8);
        }
        else
        {
            resultP.textContent=operate(a,firstOperator,b);
        }
        clearScreen();
        screen.appendChild(resultP);
    }
    a=null;
    b=null;
    firstOperator=null;
}
// event listener for the '=' button
res.addEventListener('click',calculate);

// reset calculator function
function reset()
{
    a=null;
    b=null;
    firstOperator=null;
    secondOperator=null;
    resetScreen();
}

// event listener for the 'AC' button
clearBtn.addEventListener('click',reset);

// display result in scientific notation
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }
// number of degits in a number
  function getlength(number) {
    return number.toString().length;
}
