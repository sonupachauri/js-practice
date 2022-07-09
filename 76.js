const user1 ={
    firstName:"sonu",
    age:6,
    about(){
        console.log(this.firstName,this.age)
    }
}

user1.about();