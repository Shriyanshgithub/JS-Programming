// Create a Map to store individuals by birth month
let birthMonthMap = new Map();

// Initialize the Map with empty arrays for each month (1 to 12)
for (let i = 1; i <= 12; i++) {
    birthMonthMap.set(i, []);
}

// Function to generate a random month between 1 and 12
function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();
    birthMonthMap.get(month).push(`Individual ${i}`);
}

// Display the individuals grouped by birth month
for (let [month, individuals] of birthMonthMap) {
    console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(', ') : 'No birthdays'}`);
}
