// function hello(){
//     console.log("hello world");
// }
// hello.call();
// //call , apply , bind

// const user1 ={
//     firstName:"sonu",
//     age:6,
//     about:function(){
//         console.log(this.firstName)
//     }
// }

// const user1 ={
//     firstName:"sonu",
//     age:6,
//     about:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician)
//     }
// }
function about(hobby,favMusician){
 console.log(this.firstName,this.age,hobby,favMusician);
}
const user1 ={
    firstName:"sonu",
    age:6,
}
const user2 ={
    firstName:"manoj",
    age:9,
}
//user1.about.call(user2,"Guitar","Kishore");
//about.call(user1,"guitar","kishore");

//apply
//about.apply(user1,["guitar","Kishore"]);
//bind // return function
const func=about.bind(user1,"guitar","kishore");
func();