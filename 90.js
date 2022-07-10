// getter & setters
class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    get fullName(){
        return  `${this.fname} ${this.lname}`;
    }
    // setName(fname,lname){
    //     this.fname=fname;
    //     this.lname=lname;
    // }
    set fullName(fullName){
            const [fname,lname]=fullName.split(" ");
            this.fname = fname;
            this.lname = lname;
        }
}

person1 = new Person("sonu","pachauri",32);
// console.log(person1);
//call fullName without parenthisis
// console.log(person1.fullName);
// person1.fname="manoj";
// person1.lname="kumar";

// person1.setName("manoj","kumar");
// console.log(person1.fname);

person1.fullName="raju kanojia";
console.log(person1);
