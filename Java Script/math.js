let num1 = 25;
let num2 = 40;

const gap = num1-num2;
console.log(gap)

if(gap < 5){
    console.log('u can be friend')
}
else{
    console.log('not possible')
}



function largestNum(array){

    let largeNum = array[0];
    for( let i = 0; i< array.length; i++){
        const element = array[i];
        if(element > largeNum){
            largeNum =element;
        }

    }
    return largeNum;
}
console.log(largestNum([25, 6, 750, -100, 450,66,800,-60]));