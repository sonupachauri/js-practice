//Every Method

// const numbers = [1,4,6,8,10];
// const ans = numbers.every((number)=>number%2===0);
// //call back returning boolean // true , false

// // every mothod ---true / false after applied on all elements

// console.log(ans);

const userCart = [
    {id:1,name:"p1",price:300},
    {id:2,name:"p2",price:3000},
    {id:3,name:"p3",price:200},
    {id:4,name:"p4",price:8000},
    {id:5,name:"p5",price:500}
];

// check every produce < 3000

const ans = userCart.every((cartItem)=>cartItem.price<9000);
console.log(ans);