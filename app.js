const clearButton = document.getElementById('clear-button');
const delButton = document.getElementById('delet-button');
const diviveButton = document.getElementById('divide-button');
const numberButtons = document.querySelectorAll('.number');
const multiplyButton = document.getElementById('multiply-button');
const substractButton = document.getElementById('substract-button');
const addButton = document.getElementById('add-button');
const decimalButton = document.getElementById('decimal-button');
const equalButton = document.getElementById('equal-button');
const resultElement = document.getElementById('result-element');

let result = '';
let operators = '';
let previousOperant = 0;

// result = 24
//operators = +
// previousOperant = 24
// result = 0
// result = 5
// result = 29


//Function to append
function append(button) {
    if (button === '.' && result.includes('.'))return;
    result+= button;
    updateDisplay();
};

// Function to update display
function updateDisplay() {
    if (operators) {
        resultElement.innerText = `${previousOperant} ${operators} ${result}`
    }else{
        resultElement.innerText = result; 
    }
    
};

//Function to selected operators 
function operatorSelector(opreatorValue) {
    if (result=== '') return
    if (operators !== '' && previousOperant !== '') {
        calculteResult()
    };

    operators = opreatorValue;
    previousOperant = result;
    result = '';
    updateDisplay();
};

// Function to calculate result 
function calculteResult() {
    let evaluatedResult;
    let pre = parseFloat(previousOperant);
    let current = parseFloat(result);

    if (isNaN(pre) || isNaN(current)) return;
    switch (operators) {
        case '-':
            evaluatedResult = pre - current
            break;
        case '+':
            evaluatedResult = pre + current
            break;
        case '*':
            evaluatedResult = pre * current
            break;
        case '/':
            evaluatedResult = pre / current
            break;
    
        default:
            return;
    }

    result = evaluatedResult.toString();
    operators = '';
    previousOperant = '';
 
}

//Function for number
numberButtons.forEach(number =>{
    number.addEventListener('click',(e)=>{
        // result+= number.innerText; // append function
        append(number.innerText)
    })
});

//Function to delet Last alue
function deletLastValue() {

    if (operators !== '' && result === '') {
        operators = '';
        result = previousOperant;
        previousOperant = '';
        updateDisplay();
    }else{
        result = result.slice(0,-1);
        updateDisplay();
    }
}

//Equal button 
function equal() {
    if(result==='') return;
    calculteResult();
    updateDisplay();
};
//Function to allclera 
function allClear() {
    result = '';
    operators = '';
    previousOperant = '';
    updateDisplay();
}



decimalButton.addEventListener('click',()=>append('.'));
addButton.addEventListener('click',()=> operatorSelector('+'));
substractButton.addEventListener('click',()=> operatorSelector('-'));
multiplyButton.addEventListener('click',()=> operatorSelector('*'));
diviveButton.addEventListener('click',()=> operatorSelector('/'));
equalButton.addEventListener('click',equal);
clearButton.addEventListener('click',allClear);
delButton.addEventListener('click',deletLastValue);