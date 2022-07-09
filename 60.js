//sort method
//0 - 48 , 1-49



// const name=['sonu','ankit','sachin','SACHIN'];
// name.sort();
// console.log(name);

// const numbers = [2,5,100,400,4];
// // numbers.sort((a,b)=>{
// //     return a -b;
// // })

// // 100-400
// //a-b ---->positive(greater then 0)--->b,a
// // a-b---->negartive()-------->a,b
// // numbers.sort((a,b)=>a-b)
// numbers.sort((a,b)=>b-a)
// console.log(numbers);

//price lowToHigh ,  HighToLow

const products = [
    {id:1,name:"p1",price:300},
    {id:2,name:"p2",price:3000},
    {id:3,name:"p3",price:200},
    {id:4,name:"p4",price:8000},
    {id:5,name:"p5",price:500}
];
//low to High
// products.sort((a,b)=>{
//            return a.price - b.price;
// });

const lowToHigh=products.slice(0).sort((a,b)=>{
           return a.price - b.price;
});

console.log(lowToHigh);