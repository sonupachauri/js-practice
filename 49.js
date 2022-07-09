//lexical scope
function myApp(){
    const myvar ="value1";
    function myfunc(){
        //const myvar = "value59"; 

        const myfunc2 = ()=>{
            console.log("inside myfunc2",myvar);
        }
        //console.log("inside myfunc",myvar);
        myfunc2();
    }
    // const myfunc2 = function(){}
    // const myfunc3 = ()=>{}
    console.log(myvar); 
    myfunc();
}
myApp();