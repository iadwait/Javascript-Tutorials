// Tutorial 10 - Functions and Scope
console.log("Tut 10");


function wishHappyBirthday(name,symbol = "!!!") {
    if (typeof name !== "undefined") {
        console.log("Wish you many many Happy returns of the day " + name + symbol);
    }
}

wishHappyBirthday("John");
wishHappyBirthday("Adwait","!!!!!!!");

//Writing function name is now optional -> called "Anonymous Functions / Function Expressions"
const msg = function greet(name) {
    console.log("Great morning " + name);
}

msg("Sonu");

// Functions inside object Key

let objUser = {
    name: "Peter James",
    game: function(){
        return "GTA"
    }
}

console.log(objUser.game());

// Scope
// Var - Global Scope , let - Local/Block level Scope , Recommended - let
let l = 5;
var v = 10;

function test() {
    let l = 30;
    v = 50;
    console.log("v = " + v);
    console.log("l = " + l);
}

test();

console.log(v);