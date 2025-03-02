const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
}

// Function to validate input within specified range
function isValidCelsius(degC) {
    return degC >= 0 && degC <= 100;
}

function isValidFahrenheit(degF) {
    return degF >= 32 && degF <= 212;
}

// User input for conversion selection
rl.question("Choose Conversion: \n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter 1 or 2: ", (choice) => {
    switch (choice) {
        case '1':  // Celsius to Fahrenheit
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", (degC) => {
                degC = parseFloat(degC);
                if (isValidCelsius(degC)) {
                    let degF = celsiusToFahrenheit(degC);
                    console.log(`${degC}°C is equal to ${degF.toFixed(2)}°F`);
                } else {
                    console.log("Please enter a valid temperature between 0°C and 100°C.");
                }
                rl.close();
            });
            break;

        case '2':  // Fahrenheit to Celsius
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (degF) => {
                degF = parseFloat(degF);
                if (isValidFahrenheit(degF)) {
                    let degC = fahrenheitToCelsius(degF);
                    console.log(`${degF}°F is equal to ${degC.toFixed(2)}°C`);
                } else {
                    console.log("Please enter a valid temperature between 32°F and 212°F.");
                }
                rl.close();
            });
            break;

        default:
            console.log("Invalid choice! Please enter 1 or 2.");
            rl.close();
    }
});
