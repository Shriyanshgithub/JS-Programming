// Function to check if a number is a palindrome
function isPalindrome(num) {
    // Convert the number to a string
    let str = num.toString();
    // Reverse the string and compare with the original
    return str === str.split('').reverse().join('');
}

// Function to check if two numbers are palindromes of each other
function arePalindromes(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
}

// Example usage
let num1 = 121;
let num2 = 1331;

if (arePalindromes(num1, num2)) {
    console.log(`${num1} and ${num2} are palindromes.`);
} else {
    console.log(`${num1} and ${num2} are not palindromes.`);
}
