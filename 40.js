// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newArray = [...array1,...array2,8,9];
// const newArray = [..."23456789"];
// console.log(newArray);

// spread operator in object

const obj1 ={
     key1:"keyvalue1",
     key2: "keyvalue2"
}
const obj2 ={
    key1:"valueunique",
    key3:"keyvalue3",
    key4: "keyvalue4"
}

const newObj = {..."abc"};
console.log(newObj);