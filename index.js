let num1 = 2
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    document.getElementById("sum-el").textContent = "Result: ";
    let sum1 = num1 + num2;
    let a = document.getElementById("sum-el").textContent;
    a += sum1;
    document.getElementById("sum-el").textContent = a;

}

function subtract() {
    document.getElementById("sum-el").textContent = "Result: ";
    let sum1 = num1 - num2;
    let a = document.getElementById("sum-el").textContent;
    a += sum1;
    document.getElementById("sum-el").textContent = a;
}

function divide() {
    document.getElementById("sum-el").textContent = "Result: ";
    let sum1 = num1 / num2;
    let a = document.getElementById("sum-el").textContent;
    a += sum1;
    document.getElementById("sum-el").textContent = a;
}

function multiply() {
    document.getElementById("sum-el").textContent = "Result: ";
    let sum1 = num1 * num2;
    let a = document.getElementById("sum-el").textContent;
    a += sum1;
    document.getElementById("sum-el").textContent = a;
}




