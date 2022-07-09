const user1 ={
    firstName:"sonu",
    age:6,
    about:function(){
        console.log(this.firstName,this.age)
    }
}

//dont do this mistake

const myFunc = user1.about.bind(user1);
myFunc();