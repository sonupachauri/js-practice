//primitive & reference types

let num1 = 6;
let num2 = num1;
console.log('value of num1 is '+num1);
console.log('value of num2 is '+num2);
num1++;
console.log('After Incrmeent num1');
console.log('value of num1 is '+num1);
console.log('value of num2 is '+num2);

// refrence type--- array

let array1=['item1','item2'];
let array2 = array1;
console.log('value of array1 is'+array1);
console.log('value of array1 is'+array2);
array1.push('item3');
console.log('After pushing item in array1');
console.log('value of array1 is '+array1);
console.log('value of array2 is '+array2);
