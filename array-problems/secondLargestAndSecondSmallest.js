// Generate 10 random 3-digit numbers and store them in an array
let numbers = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;  // Random 3-digit number (100 to 999)
    numbers.push(randomNum);
}

console.log("Generated Numbers:", numbers);

// Function to find 2nd largest and 2nd smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Find largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Find smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return {
        secondLargest,
        secondSmallest
    };
}

// Get the results
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);

// Output the results
console.log("2nd Largest Number:", secondLargest);
console.log("2nd Smallest Number:", secondSmallest);
