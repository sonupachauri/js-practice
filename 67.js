//sets (its iterable)
//store data
//no -index based access
//unique items only
//order is not guaranted

// // const numbers =new Set([1,2,3,4]);
// const items=["items","items2"];
// const numbers =new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(items);
// numbers.add(["items3","items4"]);
// numbers.add(["items3","items4"]);
// // if(numbers.has(1)){console.log("1 is present")}else{
// //     console.log("1 is not present");
// // }
// // console.log(numbers);

// for(let number of numbers){
//    console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];
const uniqeuElements = new Set(myArray);
let length = 0;

for(let element of uniqeuElements){
    length=length+1;
}
console.log(length);
// console.log(uniqeuElements);