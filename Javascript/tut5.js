// Tutorial 5 - Type Conversion & Type Coercion

//Type Conversion
let myvar = 30;
console.log(myvar, typeof(myvar)); //30 "number"
myvar = String(myvar);
console.log(myvar, typeof(myvar)); //30 string

let myVar1 = true;
console.log(myVar1, typeof(myVar1)); //true "boolean"
myVar1 = String(myVar1);
console.log(myVar1, typeof(myVar1)); //true string

let dateVar = new Date();
console.log(dateVar,typeof(dateVar));
dateVar = String(new Date());
console.log(dateVar,typeof(dateVar));

let arr = [1,2,3,4,5]; //arr.length = 5
console.log(arr,typeof(arr));
arr = String(arr); //arr.length = 9 (includes ',')
console.log(arr,typeof(arr));

let i = 10;
let strI = i.toString();
console.log(strI);

let str = "1234";
let numStr = Number(str); //If str contained arrays or alphabet eg. Number("12dd4") -> NaN "number" -> NaN(not a Number)
console.log(numStr,typeof(numStr)); //1234 "number"
//Number(true) -> 1
//Number(false) -> 0

let num = parseInt('5566'); // 34.055 -> 35 if Number('34.055') -> 34.055
console.log(num,typeof(num));

let floatnum = parseFloat('34.5');
console.log(floatnum,typeof(floatnum)); // 34.5 "number"
//.toFixed() -> number of decimal points default is 0
console.log(floatnum.toFixed(5),typeof(floatnum)); // 34.50000 number

// Type Coercion
let strN = "1234";
let num1 = 5678;
console.log(strN + num1); // 12345678 (Js converts num to str and concatinates)

console.log(Number(strN) + num1); //6912
