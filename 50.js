//block scope vs function scope
// let & const are block scope
// var is function scope

// {
//     var firstName="sonu";
// }

// {
//     console.log(firstName);
// }

function myApp(){
     if(true){
          let firstName = "sonupa";
          console.log(firstName);
     } 
     console.log(firstName);
}
myApp();