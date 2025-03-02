const obj = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
    
};

for(i =0; i<10 ; i++){
    let num = Math.floor(Math.random()*10);
    if(num.toString() === "0") {
       console.log("zero");
    }
    else if(num.toString() in obj){
        console.log(obj[num.toString()]);
    }
}
