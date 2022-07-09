//some method

const numbers= [3,4,6,8];

// const ans = numbers.some((number)=>number%2==0);
// console.log(ans);

const products = [
    {id:1,name:"p1",price:300},
    {id:2,name:"p2",price:3000},
    {id:3,name:"p3",price:200},
    {id:4,name:"p4",price:8000},
    {id:5,name:"p5",price:200500}
];

const ans = products.some((cartItem)=>cartItem.price > 2000000)
console.log(ans);