const input = 5;
let factorial = 1;
for(let i = 1; i <= input; i++){
    factorial = factorial * i;
}
// console.log(factorial);

function factorialOf5(i){
    if(i == 1){
        return 1;
    }
    return i * factorialOf5(i-1);
}
// console.log(factorialOf5(5));

