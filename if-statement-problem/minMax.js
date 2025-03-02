let min = Infinity;
let max = 0;

for(i =0 ; i<5 ; i++){
    let num = Math.floor(Math.random()*1000);
    min = Math.min(min,num);
    max = Math.max(max,num);
}

console.log("The minimum value is : " + min);
console.log("The maximum value is : " + max);