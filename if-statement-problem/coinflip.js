// Function to simulate a coin flip
function flipCoin() {
    // Generate a random number: 0 or 1
    const result = Math.floor(Math.random() * 2);

    // Check result and print "Heads" or "Tails"
    if (result === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

// Call the function to flip the coin
flipCoin();
