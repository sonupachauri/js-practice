// // new keyword
// function createUser(firstName,age){
//    this.firstName=firstName;
//    this.age=age;
// }

// createUser.prototype.about=function(){
//     console.log(this.firstName,this.age);
// }
// const user1 = new createUser("sonu",7);
// // 1. empty object this = {}
// //2. return this
// 3. 

// // console.log(user1);
// user1.about();

// New Keyword

function CreateUser(firstName,lastName,email,address){
    //const user={};
       // const user = Object.create(userMethods);
       // const user = Object.create(createUser.prototype);  
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.address=address;
    }
    
        CreateUser.prototype.about=function(){
            return `${this.firstName} is ${this.email}`
        }
        CreateUser.prototype.about=function(){
            return this.age >=18
            }
    //console.log(createUser.prototype);
    
    const user1 = new CreateUser("sonu","pachauri","sonu@gmail.com","myaddress");
    const user2 = new CreateUser("manoj","pachauri","manoj@gmail.com","myaddress");
    const user3 = new CreateUser("rahul","pachauri","rahul@gmail.com","myaddress");
    // console.log(user1);

    for(let key in user1){
        //console.log(key);
        if(user1.hasOwnProperty(key)){
            console.log(key);
        }
    }