//call back function

function myfunc2(name){
    console.log("inside my func2");
    console.log(`my name is ${name}`);
}

function myfunc(callback){
    console.log("hello!!!");
    callback('harshit');
}

myfunc(myfunc2);