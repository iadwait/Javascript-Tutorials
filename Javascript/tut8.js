// Tutorial 8 - If Else , If Else ElseIF and Switch Statement

const age = 40;

// == vs ===
// Double Equal == compares only value ef. 65 == '65' Ans.True
// Tripple Equal === compares value + datatype eg. 65 === 65 Ans.True 
// not EqualTo != Check's if value is not matching , Datatype is excluded
// Double Not EqualTo !== check's if value and datatype are not matching

// If Else ElseIf
if (age === 20) {
    console.log("Age is 20");
} else if(age === 40) {
    console.log("Age is 40");
} else {
    console.log("Age is not 20 or 40");
}

// Not Equal to Eg
const marks = '75';

if (marks != 75) { //False
console.log("Not 75");
} else {
console.log("75");
}

if (marks !== 75) { //True
    console.log("Not 75");
} else {
    console.log("75");
}

// Check if Variable is defined or not / If variable Exists or does not exists
// let vari = 10;

if (typeof vari !== 'undefined') {
    console.log("Vari is defined");
} else {
    console.log('vari is not defined');
}

// AND and OR Conditions
const canDrive = true;
const exp = 23;

if(canDrive && exp >= 5) {
    console.log("You are eligible to get new License");
} else {
    console.log("You cannot get License");
}

// Ternary operator
const isEligible = canDrive ? 1 : 0;
console.log(isEligible); 
console.log(canDrive ? "canDrive = 1" : "canDrive = 0");


// Switch Statement

switch (age) {
    case 18:
        console.log("Age is 18");
        break;
        case 40:
        console.log("Age is 40");
        break; // If u remove break next block will also get Executed
        case 28:
        console.log("Age is 28");
        break;
        case 78:
        console.log("Age is 78");
        break;
    default:
        console.log("Age is undefined");
        break
}