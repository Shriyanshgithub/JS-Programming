const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find prime factors
function findPrimeFactors(n) {
    let factors = [];

    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }

    // Check odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }

    // If remaining n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// User input
rl.question("Enter a number to find its prime factors: ", (input) => {
    let n = parseInt(input);

    if (n > 1) {
        let primeFactors = findPrimeFactors(n);
        console.log(`Prime factors of ${n} are:`, primeFactors);
    } else {
        console.log("Please enter a number greater than 1.");
    }

    rl.close();
});
