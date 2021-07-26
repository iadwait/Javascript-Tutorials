// Tutorial 23 - Math Object and it's Functions
console.log('Tut 23');

let x = 3;
let y = 5;
let z;

// Basic Calculations
z= x+y;
z= x-y;
z= x*y;
z= x/y;
console.log(z);

// Exploring Math Object
z = Math;
console.log(z); // Displays Math Object which contain many math functions to easy calculations
z = Math.PI; //3.141592653589793
z = Math.E;//Eulers Number 2.718281828459045 
console.log(z);

// Math.Round vs Math.Ceil vs Math.floor
// Round makes round up means 5.4 will be 5 but 5.5,5.6...will become 6
// Ceil makes it the next number no matter what decimal it is between 1 to 9 eg: 5.3 will become 6 and gives a number greater than it eg- -5.3 -> -5
// floor is used to get Int number and it returns small number from that eg:- 5.6 -> 5, -5.8 -> -6 
z = Math.round(5.6); // 6
z = Math.round(5.3); // 5
z = Math.round(5.0); // 5
z = Math.ceil(5.6); // 6
z = Math.ceil(5.3); // 6
z = Math.ceil(-5.3); // -5
console.log(z);
z = Math.ceil(5.0); // 5
z = Math.floor(5.8); //5
z = Math.floor(-5.8); //-6
console.log(z);

// Absolute
// Convert Negative to Positive and return similarly for Positive just return 
z = Math.abs(5.6); // 5.6
z = Math.abs(5); // 5
z = Math.abs(-5.6); // 5.6
z = Math.abs(-5); // 5
console.log(z);

// Square Root (sqrt)
z = Math.sqrt(49); // 7
z = Math.sqrt(66); // 8.12403840463596
console.log(z);

// Power (pow)
// 2 to the power 3
z = Math.pow(2,3); // 8
console.log(z);

// Min and Max 
// Min - Returns Smallest Number from set of Numbers
// Max - Returns biggest Number from set of Numbers
z = Math.min(23,45,12,56,23,67,12,4); // 4
z = Math.max(23,45,12,56,23,67,12,4); // 67
console.log(z);

// Random Number
// Math.random() //Returns Random Number between 0 to 1
z = Math.random(); // 0.7931695734192177 0.8031083726254629 0.9675769074177565
console.log(z);
// Generate Random Number Between 0 to 100
// Multiple Number Generated between 0 to 1 by 100
z = Math.random() * 100; // 25.42348711340521 53.3577624101228
console.log(z);
// Generate Number between any specific range link 10 to 100
z = Math.random();
z = 10 + z*(100 - 10) // 59.67411125595617 30.98263264078159
console.log(z);
// Eg 2:- Generate Random No between 50 to 100
z = 50 + (100-50)*Math.random();
console.log(z); // 64.1511755954964 83.11144632146116
// Use Ceil or Floor to round up as per your Requirement
z = Math.ceil(50 + (100-50)*Math.random());
console.log(z); // 64 69 74 90 72 61
