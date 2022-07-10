class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        this.age <=1;
    }
    isCute(){
        return true;
    }
}

// const animal1=new Animal("tom",2);
// console.log(animal1.eat());

//dog class 

class Dog extends Animal{
    isHat(){
    return "hating";
    }
}
const tommy = new Dog('tommy',4);
console.log(tommy.eat());