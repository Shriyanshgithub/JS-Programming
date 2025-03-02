let stake = 100;     
let goal = 200;      

while (stake > 0 && stake < goal) {
    bets++;  

    let betResult = Math.floor(Math.random() * 2);

    if (betResult === 1) {
        stake++;   
        wins++;    
    } else {
        stake--;   
    }
}
console.log("Total Bets Made: " + bets);
console.log("Total Wins: " + wins);
console.log("Final Amount: Rs " + stake);

if (stake === goal) {
    console.log("Congratulations! You reached the goal of Rs 200! 🎉");
} else {
    console.log("You went broke! Better luck next time! 💸");
}
