const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find triplets with zero sum
function findTriplets(arr) {
    let found = false;
    let triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                    found = true;
                }
            }
        }
    }

    if (found) {
        console.log("Triplets with sum zero are:");
        triplets.forEach(triplet => console.log(triplet));
    } else {
        console.log("No triplets found with sum zero.");
    }
}

// User input
rl.question("Enter integers separated by spaces: ", (input) => {
    let arr = input.split(' ').map(Number);

    if (arr.length < 3) {
        console.log("Please enter at least three integers.");
    } else {
        findTriplets(arr);
    }

    rl.close();
});
