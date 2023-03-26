

const element = [0, 1];
for(let i = 2; i<=15; i++){
    element[i]= element[i-1] + element[i-2];
}
// console.log(element)



const element1 = [0, 1];
for(let i = 2; i<=15; i++){
    element1[i]= element1[i-1]*2  + element1[i-2];
}
console.log(element1)
