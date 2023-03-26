// sum of all elements of an array

function sumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let elements = numbers[i];
        sum += elements;
    }
    return sum;
}

console.log(sumArray([5, 12, 20, 75, 90]))



// sum of all odd elements of an array


function sumodd(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let elements = numbers[i];
        if( elements % 2 !==0){
            sum += elements;
        }
    }
    return sum;
}
console.log(sumodd([5, 12, 20, 75, 90]))