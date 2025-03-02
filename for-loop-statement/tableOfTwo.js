
console.log("Enter the number");
const num = parseInt(process.argv[2]);

if(isNaN(num) || n<1){
    console.log("Invalid number");
}
else{
for( i = 1 ; i<=num ; i++){
    console.log(`2^${i} is ${Math.pow(2,i)}`);
 }
}