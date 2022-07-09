//function returing func

function myFunc(){
   function hello(){
     //console.log("hello world");
     return "hello world";
   }
   return hello;
}

const ans=myFunc();
console.log(ans());