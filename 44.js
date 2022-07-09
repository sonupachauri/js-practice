//functions

// function sumTwoNumber(num1,num2){
//     return num1+num2;
// }

// const returnVal=sumTwoNumber(2,3);
// console.log(returnVal);

// function isEven(num){
//     if(num % 2 == 0)
//      return true;
//     return false;
// }

// const checkEven = isEven(22);
// console.log(checkEven);


const searchArray=[1,2,4,5,7,9];
const target = 7;

function checkIndex(array,target){
   for(let i=0; i<=array.length;i++){
      if(array[i] == target)
        return i;
   }
   return -1;
}

const returnVal = checkIndex(searchArray,target);

console.log(returnVal);