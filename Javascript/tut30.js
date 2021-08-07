// Tutorial 30 - Prototype Inheritance

console.log('This is Tut 30');

// Create an Object named Proto with Methods, ChangeName to change Object Name
const proto = {
    slogan: function(){
        return `My Slogan - EAT SLEEP CODE REPEAT`;
    },
    changeName: function(newName){
        this.name = newName
    }
}

// This will create an Object with proto as prototype
const objAdwait = Object.create(proto);
objAdwait.name = "AB";
objAdwait.role = "Software Developer";
objAdwait.changeName("Adwait");
console.log(objAdwait);

// This also creates an object with proto prototype (This Synax is not need to be used now OLD Syntax)
const objTest = Object.create(proto,{
    name: {value: "Test Object",writable: true},
    role: {value: "Testing Old JS Syntax"}
});
objTest.changeName("Dummy Name"); // This line will only work if we make the name property writeable
console.log(objTest);

// Create Employee Constructor
function Employee(name,salary,experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Add a Method to Employee(Constructor's) Prototype
Employee.prototype.employeeSlogan = function(){
    return `This company is for Developers, Regards ${this.name}`;
}

// Let's Create Employee's Object
let objEmp1 = new Employee("Adwait",5213432,"21 yrs");
console.log(objEmp1);

// Now let's Create a new constructor named Programmer inherit things from Employee Constructor
function Programmer(name,salary,experience,language) {
    // This will call Employee's Constructor and set name,salary and experience(Reusability)
    Employee.call(this,name,salary,experience);
    this.language = language;
}

// Inherit the Prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let mark = new Programmer('Mark Z',3459345,'40 yrs','CPP');
console.log(mark);