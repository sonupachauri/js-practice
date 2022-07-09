//methods
//function inside object

// const person={
//     firstName:"mohit",
//     age:9,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age} yrs`)
//         //console.log(this);
//     }
// }

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age} yrs`);
}
const person1={
    firstName:"mohit",
    age:9,
    about:personInfo
}

const person2={
    firstName:"rohit",
    age:8,
    about:personInfo
}


person1.about();
person2.about();