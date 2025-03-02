const array = new Array(1,10,100,1000);

for(const number of array){
    if(number / 1 === 1){
        console.log("onces");
    }
    else if(number / 10 ===  1){
        console.log("tens");
    }
    else if(number / 100 === 1){
        console.log("hundered");
    }
    else{
        console.log("thousand");
    }
}
