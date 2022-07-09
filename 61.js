//find method

// const myArray=["Hello","cat","dog","Lion"];

// function isLength3(string){
//     return string.length === 3
// }

// const ans=myArray.find((string)=>string.length ===3);

// console.log(ans);

const users =[
    {id:1,name:"sonu"},
    {id:2,name:"manoj"},
    {id:3,name:"abhi"},
    {id:4,name:"jyoti"},
    {id:5,name:"viaaan"},
    {id:6,name:"aaru"},
];

const myUser=users.find((user)=>user.id ===3);
console.log(myUser);