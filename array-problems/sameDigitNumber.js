let arr = [];

for(i = 10 ; i<=100 ; i++){
    if(i % 11 === 0){
        arr.push(i);
    }
}

console.log(arr.join(","));