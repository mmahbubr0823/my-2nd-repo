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

const string = 14;

function evenOdd(string){
    if(typeof(string) !== 'string'){
        return 'Please, provide a string.'
    }
    
   const char = string.length;
   if(char % 2 === 0){
    return 'even';
   }
   else{
    return 'odd';
   }
}
// console.log(evenOdd(string));

