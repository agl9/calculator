let numSelection="";
let num1;
let num2;
let result;
let operator="";
let resultScreen=false;
const numDisplay=document.querySelectorAll("#numbuttons");
numDisplay.forEach(button=>{button.addEventListener('click',()=>numberDisplay(button))});                                                                   
function numberDisplay(e){
    display(e.value);
    numSelection+=e.value;
}
const opDisplay=document.querySelectorAll("#opbuttons");
opDisplay.forEach(button=>{button.addEventListener('click',()=>operatorDisplay(button))
                            });
function operatorDisplay(e){
    if(operator==""){
        if(resultScreen==true)
            {resultScreen=false;
             display(e.value);
             num1=result;
             operator=e.value;}
        else{
        display(e.value);
        num1=parseFloat(numSelection);
        numSelection="";
        operator=e.value}}
}

const eqDisplay=document.querySelectorAll("#equals");
eqDisplay.forEach(button=>{button.addEventListener('click',equalDisplay)
                            });
function equalDisplay(){
            if(operator!=""){
            num2=parseFloat(numSelection);
            numSelection="";
            result=operate(operator,num1,num2);
            displayResult(result);
            operator="";}
        
}
function displayResult(value){
    const display=document.querySelector("#displayResult");
    display.innerHTML=Math.round((value*10000))/10000;
    resultScreen=true;
}

function display(value){
    const display=document.querySelector("#displayResult");
    if(resultScreen==true){display.innerHTML=value;
                           resultScreen=false;}
    else{
    display.innerHTML=="0"? display.innerHTML=value:display.innerHTML+=value;}
}
const clDisplay=document.querySelectorAll("#clear");
clDisplay.forEach(button=>{button.addEventListener('click',()=>{
                                                                resultScreen=true;
                                                                display(0);
                                                                num1=0;
                                                                num2=0;
                                                                result=0;
                                                                operator="";
                                                                numSelection="";})
                            })

document.addEventListener('keydown',keyAllocation);
function keyAllocation(e){
if(e.keyCode==61) {equalDisplay()} 
if((e.keyCode>=48&&e.keyCode<=57)||e.keyCode==190){
    const pressedKey=document.querySelector(`input[data-key="${e.keyCode}"]`)
    numberDisplay(pressedKey);}
if(e.keyCode>=106&&e.keyCode<=111){
    const pressedopKey=document.querySelector(`input[data-key="${e.keyCode}"]`)
    operatorDisplay(pressedopKey);}
}

                        
function subtract (a,b) {
	return a-b;
}

function sum (...args){
	const sumTotal=args.reduce((total,num)=>(total+num),0);
	return sumTotal;
}

function multiply (...args) {
	return args.reduce((total,num)=>(total*num),1);
}
function divide(a,b){
    if(b==0){alert("Error! cannot divide by 0");
                    return 0;}
    return a/b;
}
function remainder(a,b){
    if(b==0){alert("Error! cannot divide by 0");
                    return 0;}
    return a%b;
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
    if(a<0){return 0;}
	let total=1;
	for(let i=a;i>0;i--){
		total*=i
	}
	return total;
}

function operate(operator,...num){
    switch(operator){
        case '+':
            return sum(...num);
            break;
        case '-':
            return subtract(num[0],num[1]);
            break;
        case '*':
            return multiply(...num);
            break;
        case '^':
            return power(num[0],num[1]);
            break;
        case '/': 
            return divide(num[0],num[1]);
            break;
        case '!':
            return factorial(num[0]);
            break;
        case 'mod': 
            return remainder(num[0],num[1]);

    }
}

