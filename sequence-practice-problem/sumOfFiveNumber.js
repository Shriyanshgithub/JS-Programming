let array = new Array();

for(i=0; i<5;i++){
    array.push(Math.floor(Math.random()*100));
}

let sum =0;
for(let number of array){
  sum = sum + number;
}
console.log("The sum of number is : " + sum);
console.log("The average is : " + (sum/(array.length)));