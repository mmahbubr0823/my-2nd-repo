// const numbers = [25, 30, 65, 55, 40]
// function add1(numbers){
//     let newArray = [];
//     for(const number of numbers){
//         newArray.push(number + 1);
//     }
//     return newArray;
// }
// // console.log(add1(numbers));



const numbers = [25, 30, 65, 55, 40]
// function add1(numbers){
//     let newArray = [];
//     for(const number of numbers){
//         newArray.push(number + 1);
//     }
//     return newArray;
// }
// console.log(add1(numbers));

const add2 = numbers.map(num => num+2);
console.log(add2);