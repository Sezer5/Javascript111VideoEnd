//Inheritance Miras alma

class Person{
    firstName = "Sezer";

    write(){
        console.log(this.firstName);
    }
}

class Student extends Person{
    write(){
        console.log("Person sınfından geldi", this.firstName);
super.write();    }
}

const student1 = new Student();
student1.write();
// const person = new Person();
// person.write();