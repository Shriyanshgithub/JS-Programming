const { stdin } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("choose the number from (1-an number) ", (number) =>{
    const num = parseInt(number);
    let harmonic = 0;

    // Calculate the harmonic number
    for (let i = 1; i <= num; i++) {
        harmonic += 1 / i;
    }

    console.log(`The ${num}th Harmonic Number is: ${harmonic.toFixed(4)}`);
   
    r1.close();

})