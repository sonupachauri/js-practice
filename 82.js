// const userMethods={
//     about:function(){
//             return `${this.firstName} is ${this.email}`
//             },
//     is18:function(){
//             return this.age >=18
//             }
// }
function createUser(firstName,lastName,email,address){
//const user={};
   // const user = Object.create(userMethods);
    const user = Object.create(createUser.prototype);
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.address=address;
return user;
}

    createUser.prototype.about=function(){
         return `${this.firstName} is ${this.email}`
    }
    createUser.prototype.about=function(){
                    return this.age >=18
        }
//console.log(createUser.prototype);

const user1 = createUser("sonu","pachauri","sonu@gmail.com","myaddress");
const user2 = createUser("manoj","pachauri","manoj@gmail.com","myaddress");
const user3 = createUser("rahul","pachauri","rahul@gmail.com","myaddress");
console.log(user1);