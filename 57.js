//map function
const number=[1,3,4,8,9];

// const square= function square(number){
//     return number*number;
// }

// const newNumberList=number.map(square);

// const newNumberList=number.map(function(number){
//     return number*number;
// });
// console.log(newNumberList);

users=[
    {name:"spp",age:23},
    {name:"opp",age:32},
    {name:"mpp",age:22}
  ]

const newNameList=users.map((users)=>{
    return users.name;
});
console.log(newNameList);