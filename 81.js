function hello(){
    console.log("hello world");
}
// console.log(hello.name);

// you can add your own properties

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// console.log(hello.prototype);
// only function provide prototype property

// if(hello.prototype){
//   console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

hello.prototype.abc="abc";

console.log(hello.prototype);