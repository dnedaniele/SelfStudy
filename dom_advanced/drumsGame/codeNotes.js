/// HIGHER ORDER FUNCTION = a Function that takes as an element another function
 // Operator is a function that can take the role of the function above it
                /// You are expecting a function instead of "operator"

function add (num1, num2){
    return num1 + num2;
}

function multiply (num1, num2) {
return num1 * num2;
} 

function subtract (num1, num2) {
    return num1 - num2;
}

function division (num1, num2){
    return num1 / num2;
}

function calculator (num1, num2, operator){
    return operator(num1, num2);
}

calculator(5,4, subtract);

