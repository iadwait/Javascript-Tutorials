// Tutorial 31 - Classes and Inheritance in Javascript

console.log('This is tut 31');


// Create Employee Classs
class Employee {
    // Constructor to Initialize Data, Called at the time of object creation
    constructor(givenName, givenExperience, givenJobrole) {
        this.name = givenName;
        this.experience = givenExperience;
        this.jobrole = givenJobrole
    }

    // Creating a Method inside Class
    introduce() {
        return `My Name is ${this.name}.I am a ${this.jobrole}`
    }

    // Create a Method that return joining year
    joiningYear() {
        let currentYear = new Date().getFullYear();
        return `${this.name} has joined the Organization in ${currentYear - this.experience}`;
    }

    // Create Static Method - Can be called without object
    // Use Static method which is common and not related to any Object
    static add(a, b) {
        return a + b;
    }

}

// Create an Object
let objAdwait = new Employee("Adawit", 1, "Programmer");
console.log(objAdwait);
// Calling a static Method
console.log(Employee.add(2, 4));

// Inheritance

// Let's Create a Class name Programmer and inherit it from Employee
class Programmer extends Employee {
    // Constructor for programmer Class
    constructor(givenName, givenExperience, givenJobrole, givenlanguage, githubID) {
        // Here we will call Constructor of super class i.e Employee Class and set 3 Properties(name,exp,jobrole)
        super(givenName, givenExperience, givenJobrole);
        // here we will initialize data which is new to this class
        this.language = givenlanguage;
        this.githubID = githubID;
    }

    // Create method
    favLang() {
        if (this.language == 'Python') {
            return 'Fav Lang is Python';
        } else {
            return 'Fav Lang is Javascript';
        }
    }

    // Create Static Method
    static multiply(a,b) {
        return a*b;
        // return super.add(a,b);
    }

}

// Create Object from Programmer
let objProgrammer = new Programmer('Adwait',1,'Coder','JS','iadwait');
console.log(objProgrammer);
console.log(Programmer.multiply(2,5));
