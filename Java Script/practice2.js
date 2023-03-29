// Problem: 1

let positiveNumber = 5;
function mindGame(positiveNumber){
   if(positiveNumber <= 0){
      return 'Please, provide a positive number.';
   }
   const numToMultiply = 3;
   const numToAdd = 10;
   const numToDivide = 2;
   const numToSubtract = 5;

   let result1 = positiveNumber * numToMultiply;
   let result2 = result1 + numToAdd;
   let result3= result2 / numToDivide;
   let result4 = result3 - numToSubtract;
   return result4;

}
console.log(mindGame(positiveNumber));


// Problem: 2

const string = 'Batch 7';

function evenOdd(string){
    if(typeof(string) !== 'string'){
        return 'Please, provide a string.'
    }
    
   const count = string.length;
   if(count % 2 === 0){
    return 'even';
   }
   else{
    return 'odd';
   }
}
console.log(evenOdd(string));





// Problem: 3


let number = 15;
function isLGSeven(number){
   const seven = 7;
   let subtract = number - seven;
   if(subtract < seven){
      return subtract;
   }
   else{
      return number*2;
   }
}
console.log(isLGSeven(number));

// Problem:4

const numbers = [16, -8, -32, 0, -40, -70];
function findingBadData(numbers){
   let negatives = [];
   for(let i = 0; i< numbers.length; i++){
      const element = numbers[i];
      if(element < 0){
         negatives.push(element);
      }
   }
   const result = negatives.length;
   return result;
}
findingBadData(numbers);
console.log(findingBadData(numbers));


// Problem: 5


function gemsToDiamond(gem1, gem2, gem3){
   const firstMultiply = 21;
   const secondMultiply = 32;
   const thirdMultiply = 43;

   let gemsOfFriend1 = gem1 * firstMultiply;
   let gemsOfFriend2 = gem2 * secondMultiply;
   let gemsOfFriend3 = gem3 * thirdMultiply;
   let totalGems = gemsOfFriend1 + gemsOfFriend2 + gemsOfFriend3;

   if(totalGems >= 1000*2){
      return totalGems - 1000*2;
   }
   else{
      return totalGems;
   }
}
let friendsGems = gemsToDiamond(2, 3, 4);
console.log(friendsGems);



