// Get the command-line arguments for the range
const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

// Check if the inputs are valid numbers
if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please provide a valid range with positive integers (start <= end) and greater than or equal to 2.");
} else {
    console.log(`Prime numbers between ${start} and ${end}:`);

    // Function to check if a number is prime
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Find and print prime numbers in the range
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
