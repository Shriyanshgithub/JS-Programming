// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for
// minimum times


// Create a Map to store the count of each die result
let dieCounts = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0]
]);

// Function to roll a die and get a random number between 1 and 6
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Roll the die until one of the numbers reaches 10 times
while (true) {
    let roll = rollDie();  // Roll the die
    dieCounts.set(roll, dieCounts.get(roll) + 1);  // Update count in the Map

    // Check if any number has reached 10 times
    if (dieCounts.get(roll) === 10) {
        break;
    }
}

// Display the count of each die result
console.log("Die counts:", Object.fromEntries(dieCounts));

// Find the number that reached maximum and minimum times
let maxCount = 0, minCount = 10;
let maxNum = 0, minNum = 0;

for (let [num, count] of dieCounts) {
    if (count > maxCount) {
        maxCount = count;
        maxNum = num;
    }
    if (count < minCount) {
        minCount = count;
        minNum = num;
    }
}

// Display the results
console.log(`Number that reached maximum times: ${maxNum} (${maxCount} times)`);
console.log(`Number that reached minimum times: ${minNum} (${minCount} times)`);
