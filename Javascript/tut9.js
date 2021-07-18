// Tutorial 9 - Loops (For, while and Do While Loops),Break,Continue,Loops with Object

// For Loop
console.log("For Loop");
for (let i = 1; i <= 10; i++) {
    console.log("i = " + i);
}

// While Loop
console.log("While Loop");
let j = 1;
while (j <= 10) {
    console.log("j = " + j);
    j++; // j = j + 1 , J += 1
}

// Do While Loop
console.log("Do While Loop");
let k = 1;

do {
    if (k === 6) {
        break; // Exist the Loop 
    }
    console.log("k = " + k);
    k++;
} while (k <= 10);

// continue - To Exclude an teration in Loop use Continue , To Exit Loop use Break

do {
    if (k === 6) {
        k++;
        continue; // Stop current iteration of Loop and Execute Next iteration.
    }
    console.log("k = " + k);
    k++;
} while (k <= 10);

// Alternative Way for loop

//Existing
let arr = [1, 2, 3, 4, 5];
console.log("Existing Way");
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
}

console.log("For Each");
arr.forEach(function (element) {
    console.log(element);
})
//Syntax - Element , index , Array  
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
})

// Loops with object
let obj = {
    name: "Adwait",
    age: 23,
    post: "Software Developer"
}

for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`);
}
/*  Output
The name of object is Adwait
tut9.js:64 The age of object is 23
tut9.js:64 The post of object is Software Developer
*/