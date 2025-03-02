
const args = process.argv.slice(2).map(Number);


const day = args[0];
const month = args[1];

console.log("Day:", day, "Month:", month);

function isSpringSeason(day, month) {
    if (
        (month === 3 && day >= 20 && day <= 31) || 
        (month === 4 && day >= 1 && day <= 30) ||  
        (month === 5 && day >= 1 && day <= 31) ||  
        (month === 6 && day >= 1 && day <= 20)     
    ) {
        return true;
    } else {
        return false;
    }
}


const result = isSpringSeason(day, month);
console.log("Is in Spring Season?", result);
