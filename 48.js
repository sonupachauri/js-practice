//func inside func

const app = ()=>{
    
    const myfunc=()=>{
        console.log("hello from myfunc");
    }
    console.log("inside app");
    myfunc();
}
app();