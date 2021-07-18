// Tutorial 4 - Datatypes

// Primitive Datatypes

// String
let userName = "Adawit"
console.log("Great Morning " + userName + "!");

//Typeof operator
console.log("User Name Datatype is " + (typeof userName));

//Numbers
let marks = 74; //Decimal number also have number as Datatype
console.log("Numbers = " + marks);
console.log('Type of marks ' + (typeof marks));

//Boolean
let isProgrammer = true;
console.log("Datatype of isProgrammer " + (typeof isProgrammer));

//Null
let nullVar = null;
console.log("Datatype of nullVar " + (typeof nullVar));

//Undefined
let undef = undefined;
console.log("Datatype of undef " + (typeof undef));


//Reference Datatypes -> (Function,Object,Array,Date) -> Heap memory 

//Arrays
let myArr = [1,2,3,4,5,"String",true];
console.log("Dataype of myArr " + (typeof myArr)); 

//Object literals
let objMarks = {
    adwait: 74,
    shubham: 80,
    rohan: 70
}
console.log(objMarks);
console.log("datatype for objMarks " + (typeof objMarks));

 //Function
 function getName() {
     
 }
 console.log(typeof getName)

//Date
let date = new Date();
console.log(date);
console.log("Datatype of Data " + (typeof date))