const { stdin } = require('process');
const readline = require('readline');


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter the number : " , (number) => {
    const num = parseInt(number);

    function factorial(num){
       if(num === 0){
        return 1;
       }
       if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
    }

    console.log(factorial(num));
    r1.close();

})
