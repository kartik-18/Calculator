console.log("hello world")

const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const resultEl = document.querySelector('.display-result');
const numbersEl = document.querySelectorAll(".number");
const operationsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.clear');
const clearLastEl = document.querySelector('.clear_last');

let disnum1 = '';
let disnum2 = '';
let result = null;
let lastoperation = '';
let havedot = false;


numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {

        if (e.target.innerText === '.' && !havedot) {
            havedot = true;
        } else if (e.target.innerText === '.' && havedot) {
            return;
        }
        disnum2 += e.target.innerText;
        display2El.innerText = disnum2;

    })
});

operationsEl.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!disnum2) {
            return;
        }
        havedot = false;
        const operationName = e.target.innerText;
        if (disnum1 && disnum2 && lastoperation) {
            mathOperation();
        } else {
            result = parseFloat(disnum2);
        }
        clearVar(operationName);
        lastoperation = operationName;
        console.log(result);
    })

});


function clearVar(name = '') {
    disnum1 += disnum2 + ' ' + name + ' ';
    display1El.innerText = disnum1;
    display2El.innerText = '0';
    disnum2 = '';

    resultEl.innerText = result;

};

function mathOperation() {
    if (lastoperation === 'X') {
        result = parseFloat(result) * parseFloat(disnum2);
    } else if (lastoperation === '+') {
        result = parseFloat(result) + parseFloat(disnum2);
    }

    else if (lastoperation === '-') {
        result = parseFloat(result) - parseFloat(disnum2);
    }

    else if (lastoperation === '/') {
        result = parseFloat(result) / parseFloat(disnum2);
    }

    else if (lastoperation === '%') {
        result = parseFloat(result) % parseFloat(disnum2);
    }
};

equalEl.addEventListener("click", () => {
    if (!disnum2 || !disnum1) return;
    havedot = false;
    mathOperation();
    clearVar();
    // display1El.innerText='';
    display2El.innerText = result;
    resultEl.innerText = '';
    disnum2 = result;
    disnum1 = '';
});

clearEl.addEventListener("click", () => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    disnum2 = '';
    disnum1 = '';
    resultEl.innerText = '0';
    result = '';
});

clearLastEl.addEventListener("click", () => {
    display2El.innerText = '0';
    disnum2 = '';
});

window.addEventListener("keydown", (e) => {
    if (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.') {
        clickButton(e.key);
    }
    else if (

        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'

    ) {
        clickOperation(e.key);
    }
    else if (e.key === '*') {
        clickOperation('X');
    }
    else if (e.key == 'Enter' || e.key === '=') {
        clickEqual();
    }
});

function clickButton(key) {
    numbersEl.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    })
};

function clickOperation(key) {
    operationsEl.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    })
};

function clickEqual() {
    equalEl.click();
};

