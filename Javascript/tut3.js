// Tutorial 3 - Variables (var , let , const)
console.log('Tut 3 - Variables ( var , let , const)');

//Variables var , let , const

//var - We can change it's value
var name = "Adwait"
name = "Adwait Barkale"
console.log(name);

//Variable Declaration
var channel;
channel = "ABC Channel";
console.log(channel);

//Console.log multiple items
console.log(name,channel);

// const - We cannot change it's Value
const pi = 3.14
// Error - Assignment to constant variable.
// pi = 7;
console.log(pi);

//Cannot Declare const, Initializing it with a value is mandatory
// Missing initializer in const declaration
// const age; 
const age = 10;
console.log(age);

//let - We can change the value
//Difference between Var and let
//var - Global Variable , let - scope exists within the block
let a = 10;
{
    let a = 5;
    //Any changes done in this block will be only for Local Variable a and not global variable
    a = 20
    console.log(a); //20
}
console.log(a); //10

//Array
const arr1 = [1,2,3,4,5];
//Error
// arr1 = [5,6,7,8];
//Will Work
arr1.push(6);
console.log(arr1);

/* Common Programming Case Types :-
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/