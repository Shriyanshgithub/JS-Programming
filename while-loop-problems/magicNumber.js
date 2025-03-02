const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I'll try to guess it!");

let low = 1;
let high = 100;

function guessNumber() {
    if (low === high) {
        console.log(`The Magic Number is: ${low}! 🎉`);
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);
    rl.question(`Is your number greater than ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === 'yes') {
            low = mid + 1;
        } else if (answer.toLowerCase() === 'no') {
            high = mid;
        } else {
            console.log("Please answer with 'yes' or 'no'.");
        }
        guessNumber();
    });
}

guessNumber();
