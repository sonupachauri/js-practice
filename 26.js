// arrays are ref type

// let fruits = ["apple","banana","grapes"];
// let nums=[1,2,3,4,5,6];
// console.log(fruits);
// console.log(nums);

let fruits = ["apple","banana","grapes"];
fruits[1]="mango"
console.log(fruits);
console.log(Array.isArray(fruits));