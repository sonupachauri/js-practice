//filter method
//result always true/false value
const numbers = [1,3,2,6,8,9];

const isEven=function(number){
    return number % 2 == 0
}

constEvenNumbers= numbers.filter(isEven);
console.log(constEvenNumbers);