// 2015 // es6
//class are fake

class CreateUser{
    constructor(firstName,lastName,email,address){
        console.log("constructure called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.address=address;
    }
    about(){ return `${this.firstName} is ${this.email}`}
    is18(){return this.age >=18}
}

const user1 = new CreateUser("sonu","pachauri","sonu@gmail.com","myaddress");
// const user2 = new CreateUser("manoj","pachauri","manoj@gmail.com","myaddress");
// const user3 = new CreateUser("rahul","pachauri","rahul@gmail.com","myaddress");
// console.log(user1);
console.log(Object.getPrototypeOf(user1));