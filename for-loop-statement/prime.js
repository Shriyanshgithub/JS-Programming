const { stdin } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number greater than one : " , (number) => {
    const num = parseInt(number);

    for(let i = 2 ; i<num ; i++){
        if(num % i === 0){
            console.log(`${num} is not a prime number`);
            break;
        }
    } 

    r1.close();
})