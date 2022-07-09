//reduce
// const numbers = [2,3,6,8];
// const sum= numbers.reduce((accumulator,currentValue)=>{
//         return accumulator + currentValue;
// });
// console.log(sum);

const userCart=[
    {id:1,name:"apple",price:3000},
    {id:2,name:"samsung",price:2300},
    {id:3,name:"oneplus",price:2700},
];

// find total of price of products
const totalProd=userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0);
console.log(totalProd);
