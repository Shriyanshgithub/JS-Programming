const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the menu
console.log("Length Unit Conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Choose an option (1-4): ", (choice) => {
    rl.question("Enter the value to convert: ", (value) => {
        const num = parseFloat(value);
        let result;

        switch (parseInt(choice)) {
            case 1:
                result = num * 12;  // Feet to Inch
                console.log(`${num} Feet = ${result} Inches`);
                break;
            case 2:
                result = num * 0.3048;  // Feet to Meter
                console.log(`${num} Feet = ${result.toFixed(2)} Meters`);
                break;
            case 3:
                result = num / 12;  // Inch to Feet
                console.log(`${num} Inches = ${result.toFixed(2)} Feet`);
                break;
            case 4:
                result = num / 0.3048;  // Meter to Feet
                console.log(`${num} Meters = ${result.toFixed(2)} Feet`);
                break;
            default:
                console.log("Invalid option! Please choose between 1-4.");
        }
        rl.close();  // Close the input stream
    });
});
