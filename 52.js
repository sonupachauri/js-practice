//rest parameters

// function myFunc(a,b,...c){
//    console.log(`a is ${a}`);
//    console.log(`b is ${b}`);
//    console.log(`c is ${c}`);
// } 
// myFunc(3,4,5,6,7,8,9);

const ans=addAll(1,2,3,5,6,7,8,9);
console.log(ans);

function addAll(...numbers){
    let total=0;
    for(let num of numbers){
       total=total+num;
    }
    return total;
}