const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const N = parseInt(input);

    function primeFactors(N) {
        const factors = [];

        while (N % 2 === 0) {
            factors.push(2);
            N = N / 2;
        }

        for (let i = 3; i * i <= N; i += 2) {
            while (N % i === 0) {
                factors.push(i);
                N = N / i;
            }
        }

        if (N > 2) {
            factors.push(N);
        }

        return factors;
    }

    const result = primeFactors(N);
    console.log(`Prime factors of ${N} are: ${result.join(', ')}`);
    rl.close();
});
