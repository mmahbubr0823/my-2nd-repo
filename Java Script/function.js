function square(num){
    var result = num^2;
    return result;
}
var svalu = square(4);
// console.log(svalu);

function isEven(number){
    const myNum = number % 2;
    if(myNum == 0){
        return true;
    }
    else{
        return false;
    }
}
var age = isEven(58);
console.log(age)