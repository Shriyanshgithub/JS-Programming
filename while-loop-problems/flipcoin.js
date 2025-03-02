let isTail = 0;
let isHead = 1;

let count_Head = 0;
let count_Tail = 0;

while(true){
    let coin = Math.floor(Math.random()*2);
    console.log(coin);

    if(coin === isHead){
        count_Head++;
    }
    else if(coin === isTail){
        count_Tail++;
    }

     if(count_Head === 11){
        console.log("Head")
        break;
    }
    else if(count_Tail === 11){
        console.log("Tails");
        break;
    }

}