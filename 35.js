// array destuctring

const myArray = ['val1','val2','val3','val4'];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log(myvar1);

//let [myvar1, ,myvar2] = myArray;
// let [myvar1,myvar2] = myArray;
//let myNewArray = myArray.slice(2);
let [myvar1,myvar2,...myNewArray] = myArray;
console.log(myNewArray);
console.log(myvar1);
console.log(myvar2);