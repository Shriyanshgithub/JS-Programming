
const args = process.argv.slice(2);
const year = parseInt(args[0]);


function isLeapYear(year) {
   
    if (year >= 1000 && year <= 9999) {
        
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return "Year is a Leap Year";
        } else {
            return "Year is not a Leap Year";
        }
    } else {
        return " Please enter a valid 4-digit year!";
    }
}

if (isNaN(year)) {
    console.log( "Invalid input! Please provide a valid 4-digit year.");
} else {

    console.log(isLeapYear(year));
}
