// Read input from command line for Node.js
const num = parseInt(process.argv[2]);  // Read the number from command line

// Create an object to map numbers to weekdays
const weekdays = {
    "1": "Sunday",
    "2": "Monday",
    "3": "Tuesday",
    "4": "Wednesday",
    "5": "Thursday",
    "6": "Friday",
    "7": "Saturday"
};

// Check if the number is between 1 and 7
if (num >= 1 && num <= 7) {
    console.log(weekdays[num.toString()]);  // Print the corresponding weekday
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
