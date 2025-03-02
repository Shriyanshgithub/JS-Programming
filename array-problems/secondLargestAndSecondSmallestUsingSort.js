// Generate 10 random 3-digit numbers and store them in an array
let numbers = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;  // Random 3-digit number (100 to 999)
    numbers.push(randomNum);
}

console.log("Generated Numbers:", numbers);

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

// Find 2nd smallest and 2nd largest
let secondSmallest = numbers[1];                  // 2nd smallest element
let secondLargest = numbers[numbers.length - 2];   // 2nd largest element

// Output the results
console.log("2nd Smallest Number:", secondSmallest);
console.log("2nd Largest Number:", secondLargest);
