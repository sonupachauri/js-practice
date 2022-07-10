
const user = {
    firstName: "sonu",
    lastName: "pachauri",
    email:"engg.cse12@gmail.com",
    age:2,
    address:"House no, Colony, Pincode, State",
    about:function(){
    return `${this.firstName} is ${this.age}`
    },
    is18:function(){
    return this.age >=18
    }
}

// const aboutUser=user.about();
// console.log(aboutUser);
function createUser(firstName,lastName,email,age,address){
    const user={};
        user.firstName=firstName;
        user.lastName=lastName;
        user.email=email;
        user.address=address;
        user.about=function(){
            return `${this.firstName} is ${this.email}`
            },
        user.is18=function(){
            return this.age >=18
            }
    return user;
    }
const user1 = createUser("sonu","pachauri","sonu@gmail.com","myaddress");
console.log(user1);