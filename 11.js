let firstName;
console.log(typeof(firstName));
firstName='sonu';
console.log(typeof(firstName),firstName);

let myVariable=null;
console.log(myVariable);
console.log(typeof(null));

//BigInt

let myNumber=BigInt(12);
let sameMyNumber=123n;
console.log(myNumber+ sameMyNumber);

console.log(Number.MAX_SAFE_INTEGER);