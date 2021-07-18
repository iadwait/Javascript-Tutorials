// Tutorial 7 - Arrays and Objects

// Creating Arrays
const marks = [12,43,45,12,45,32];
const fruits = ['Apple','Orange','Mangoe'];
const mixed = [1,2,3,"ABC",true,[11,22]];

// Create Array using Array Constructor
const arr = new Array(1,2,"Orange");

console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);

// Retrive particular element from array
console.log(fruits[0]);

//Properties - without brackets
console.log(mixed.length);

// Check if it is an Array
console.log(Array.isArray(fruits));
console.log(Array.isArray('ABC'));

// Change Value at particular Index
marks[0] = 75;
console.log(marks)

// get Indexof Element in Array
let value = marks.indexOf(45);
console.log(value); // 2
value = marks.lastIndexOf(45);
console.log(value); // 4

// Mutating or Modifying Array
// Push -> Add Element at the End of Array
marks.push(99);
console.log(marks);
// unshift -> Add's Element at the Start of Array
marks.unshift(3);
console.log(marks);
// pop -> removes Element from the End of Array
marks.pop();
console.log(marks);
// shift -> removes Element from the start of Array
marks.shift();
console.log(marks);

// Splice -> Starte Index + How many Elements to Remove
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let splicedEl = arr1.splice(1,4)
console.log(arr1); //  [1, 6, 7, 8, 9, 10]
console.log(splicedEl); // [2, 3, 4, 5]

// Reverse an Array
marks.reverse();
console.log(marks);
// console.log(marks.reverse()); //This Methods Changes Original Array

// Concat 2 Arrays
let arr11 = [1,2,3,4,5];
let arr22 = [6,7,8,9,10];
// concat Return array with concatination
let arr12 = arr11.concat(arr22);
console.log(arr12);

// Objects
let objUser = {
    name: 'Adwait',
    twitter: '@AdwaitBarkale',
    isActive: true,
    marks: [70,80],
    'full name': "Adwait barkale" //if space needed in key use quotes
}

console.log(objUser);

// Access Elements from Object
console.log(objUser.marks);
console.log(objUser.marks[0]);
console.log(objUser.isActive);
// Other Way to access Values in Object
console.log(objUser['full name'])
console.log(objUser['twitter']);