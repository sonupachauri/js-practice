// impo array methods
//forEach
//map
//filter
//reduce

const numbers = [2,3,5,4,6];

// function myFunction(numbers,index){
//    console.log(`index is ${index} and number is ${numbers}`);
// }

// for(i=0;i<numbers.length;i++){
//     myFunction(numbers[i],i);
// }

// numbers.forEach(myFunction);
// ananoymans func
// numbers.forEach(function(numbers,index){
//    console.log(`index is ${index} and number is ${numbers}`);
// });

const users=[{name:"sonu",age:22}, {name:"manoj",age:23}];

// users.forEach(function(user){
//     console.log(user.name);
// })

// for(let user of users){
//     console.log(user.name);
// }

users.forEach((user,index)=>{
     console.log(index,user.name);
})