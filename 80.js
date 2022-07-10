const obj1={
    key1:"val1",
    key2:"val2"
}

// const obj2 = {
//     key3: "value3"
// }

// const obj2 ={};
// obj2.key3="val3"
//console.log(obj1.key3);
// [[prototype]] == __proto__
//prototype is diff

const obj2 = Object.create(obj1);
obj2.key3="val3";

// console.log(obj2.key2);
console.log(obj2.__proto__);
