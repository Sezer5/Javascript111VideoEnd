//Inheritance Miras alma

// class Person{
//     constructor(firstName){
//         this.firstName=firstName;
//     }
//     write(){
//         console.log(this.firstName);
//     }
// }

// const person = new Person("Sezer");
// person.write();

// class Person{
//     firstName="Sezer";
//     write(){
//         console.log(this.firstName);
//     }
// }

// class Student extends Person{
//     write(){
//         super.write();
         //Bir üst sınıf içindeki metodlara erişmek için kullanılır.
//     }
// }

// const Student1 = new Student();
// Student1.write();

class Person{
    constructor(firstName,lastName,Salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.Salary=Salary;
    }
    writeInfo(){
        console.log(this.firstName,this.lastName,this.Salary);
    }
}

class Student extends Person{
    constructor(firstName,lastName,Salary){
        super(firstName,lastName,Salary);
    }
    writeInfo(){
        super.writeInfo()
    }
}


const Student1 = new Student("Sezer","Ünalmış","10000");
Student1.writeInfo();