// clone of arrays
// below is for small array
let array1 = ['item1','item2'];
//let array2 = array1;
// let array2 = ['item1','item2'];
// array1.push('item3');

//let array2 = array1.slice(0);
//let array2 = array1.slice(0).concat(['item3','item4']);
//let array2 = [].concat(array1);
//let array2 = [].concat(array1,['item3','item4']);
//spread operator
// let array2=[...array1];
// let array2=[...array1,'item3','item4'];
let oneMoreArray=['item3','item4']
let array2=[...array1,...oneMoreArray];
console.log(array1 === array2);
console.log(array1);
console.log(array2);

