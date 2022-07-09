//parameter destructring

const person = {
     firstName:"sonu",
     gender:"male"
}

function printDetails({firstName,gender}){
     console.log(firstName);
     console.log(gender);
}

printDetails(person);



