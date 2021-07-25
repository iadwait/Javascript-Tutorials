// Tutorial 20 - Local Storage & Session Storage

console.log('Tut 20');

// Notes
/*
Local Storage - Will Always be stored for that particular site (Stores data locally on browser)
Session Storage - Will be erased once session is destroyed / Browser is Closed (Stores Data for particular session)
*/

// Local Storage - Different for every website

// Check Local Storage
// window.localStorage

// Add items in Local Storage (Key,Value)
localStorage.setItem('Name','Adwait');
localStorage.setItem('Work','Software Developer');

// See Values from Local Storage on console
// window.localStorage.keyName eg:- localStorage.Name -> Adwait

// Get Values From Local Storage
let userName = localStorage.getItem('Name');
console.log("User Name - " +userName);
let userWork = localStorage.getItem('Work');
console.log("User Work - " +userWork);
// if Key does not exist Local Storage will return null

// Clear all Local Storage
// localStorage.clear();

// Clear or Remove particular element from Local Storage
localStorage.setItem('Test','Test Data');
localStorage.removeItem('Test');

// Storing Array inside Local Storage
// Local Storage does not store array directly, We can achive it using Stringify and retrive using parse
let mySkills = ['git','Swift 5','JS'];
// localStorage.setItem('mySkills',mySkills); //Stores as -> git,Swift 5,JS
 let skill = localStorage.getItem('mySkills');
// console.log(skill); //typeof String
// Instead Do this to set and get an Array
// JSON.stringify -> convert JS Value(Array) to Object String
localStorage.setItem('mySkills',JSON.stringify(mySkills));
// JSON.parse -> Converts String Object into Object
skill = JSON.parse(localStorage.getItem('mySkills'));
console.log(skill); //typeof - Object returns array

// Session Storage - is only for a particular session if user closes and reopen browser session storage will be cleared while local storage will not be cleared
// Session Storage all functions same as local storage just use 'sessionStorage'
sessionStorage.setItem('sName','Adwait');
sessionStorage.setItem('sWork','Software Developer');

// clear session Storage
// sessionStorage.clear();

// Get Item from Session Storage
let sName = sessionStorage.getItem('sName');
console.log(sName);

// Clear particular item from Session Storage
// sessionStorage.removeItem('sName');