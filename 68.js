//maps
//maps is an iterable
//
//object literals
//key-->String
//key--->symbol
// const person = {
//      firstName:"manoj",
//      age:7,
//      1:"one"
// }

// for(let key in person){
//    console.log(typeof key);
// }

// const person = new Map();
// person.set("firstname","Harshit");
// person.set("age",7);
// person.set(1,"one");
// // console.log(person.get('firstname'));

// // for(let key of person.keys()){
// //    console.log(key,typeof key);
// // }

// for(let [key, value] of person){
//   //console.log(Array.isArray(key));
//   console.log(key,value);
// }

const person1 = {
   id:1,
   firstName:"Harshit"
}
// const person = new Map([['firstname','harshit'],['age',7]]);
// console.log(person);
const extraInfo = new Map();
extraInfo.set(person1,{age:8,gender:"male"});
console.log(person1.id);