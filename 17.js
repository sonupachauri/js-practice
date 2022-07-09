//winning number 19
//19 your guess is right
//17 too low
//20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a Number");
//console.log(typeof(userGuess));

if(userGuess === winningNumber){
   console.log("your guess is right");
}else if(userGuess > winningNumber){
   console.log('your guess is high');
}else{
    console.log('number is low');
}