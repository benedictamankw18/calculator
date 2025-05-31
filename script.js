const input = document.querySelector(".input input");
const inputHistory = document.querySelector("#history");
let SymbolChecked = false;
let resultChecked = false;
let operator = "";
let result = 0;

// function appendNumber(value) {
//     if (resultChecked && !SymbolChecked) {
//         input.value = "";
//         inputHistory.value = "";
//         resultChecked = false;
//     }
//     if (SymbolChecked) {
//         if (result == 0) {
//             result = parseFloat(input.value);
//         } else {
//             operatorfunc();
//         }
//         input.value = "";
//         SymbolChecked = false;
//     }
//     input.value += value;

// }

// function appendSymbol(value) {
//     console.log(result);
//     if (value == "+" || value == "−" || value == "×" || value == "÷") {
//         if (SymbolChecked) {
//         inputHistory.value = inputHistory.value.slice(0, -1);
//         }
        
//         operator = value;
//         SymbolChecked = true;
//     }
//     inputHistory.value += value;
// }

// function cls() {
//     input.value = "";
//     inputHistory.value = "";
//     SymbolChecked = false;
//     resultChecked = false;
//     result = 0;
//     operator = "";
// }

// function del() {
//     if (input.value.length > 0) {
//         input.value = input.value.slice(0, -1);
//         inputHistory.value = inputHistory.value.slice(0, -1);
//     }
// }

// function calculate() {
//     operatorfunc();
//     input.value = result;
//     result = 0;
//     SymbolChecked = false;
//     resultChecked = true;
// }

// function operatorfunc() {
//     switch (operator) {
//         case "+":
//             result += parseFloat(input.value);
//             break;
//         case "−":
//             result -= parseFloat(input.value);
//             break;
//         case "×":
//             result *= parseFloat(input.value);
//             break;
//         case "÷":
//             result /= parseFloat(input.value);
//             break;
//         default:
//             result = parseFloat(input.value);
//     }
// }


function appendNumber(value) {
    if (resultChecked && !SymbolChecked) {
        input.value = "";  // Reset input after result is displayed
        inputHistory.value = ""; // Clear history when starting a new calculation
        resultChecked = false;
        result = 0;  // Reset result so it doesn't affect new calculations
    }

    if (SymbolChecked) {
        console.log("done");
        if (result === 0 && inputHistory.value === "") {
            result = parseFloat(input.value);  // Initialize result on first input
        } else {
            operatorfunc();  // Apply the previous operator before appending a number
        }
        input.value = "";  // Clear input for the next number
        SymbolChecked = false;
    }

    input.value += value;  // Append the number to the input field
    inputHistory.value += value;
}

function appendSymbol(value) {
    if (SymbolChecked) {
        inputHistory.value = inputHistory.value.slice(0, -1); // Replace the last operator in the history
    } else {
        if (input.value !== "") {
            operatorfunc();  // Apply the pending calculation before adding a new operator
        }
    }

    operator = value;
    SymbolChecked = true;

    inputHistory.value += value ;  // Add the operator and current number to history
    // input.value = "";  // Clear input for the next number
}

function cls() {
    input.value = "";
    inputHistory.value = "";
    SymbolChecked = false;
    resultChecked = false;
    result = 0;
    operator = "";
}

function del() {
    if (input.value.length > 0) {
        input.value = input.value.slice(0, -1);  // Remove last digit in input
        inputHistory.value = inputHistory.value.slice(0, -1);  // Also remove from history
    }
}

function calculate() {
    operatorfunc();  // Apply final calculation when equals is pressed
    input.value = result;  // Display the result
    // inputHistory.value += input.value;  // Append result to history
    result = 0;  // Reset result for next calculation
    SymbolChecked = false;
    resultChecked = true;  // Indicate that calculation has completed
}

function operatorfunc() {
    if (operator) {
        let currentValue = parseFloat(input.value);
        switch (operator) {
            case "+":
                result += currentValue;
                break;
            case "−":
                result -= currentValue;
                break;
            case "×":
                result *= currentValue;
                console.log(operator);
                break;
            case "÷":
                result /= currentValue;
                break;
            default:
                result = currentValue;
        }
    } else {
        result = parseFloat(input.value);  // Set result to input if no operator is set
    }
}
