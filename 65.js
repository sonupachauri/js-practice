// splice method
//start , delete, insert

const myArray = ['item1','item2','item3'];

// delete
// myArray.splice(1,1,);
// myArray.splice(1,0,"inserted item");

// const deletedItem=myArray.splice(1,1,);

// console.log("deleted item",deletedItem);

//insert&delete simultaneously

myArray.splice(1,2,"inseted item1","inserted item2");
console.log(myArray);