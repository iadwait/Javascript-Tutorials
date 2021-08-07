// Tutorial 28 - Object Prototype In javascript

console.log('This is tut 28');

// Prototype are basically inbuilt functions that you can use, you can even add new methods to prototype

let obj = {
    name: "This is Object",
    color: "Yellow Color"
}

console.log(obj);

function createObj(givenName){
    this.name = givenName;
}

// Add Prototype to Constructor (you cannot add prototype to object created directly from object literal)
createObj.prototype.displayName = function(){
    return this.name;
}
createObj.prototype.setName = function(newName){
    // If this.attribute is not present it will create that attribute and add it to object
    this.name1 = newName;
}
// Note: - Never change prototype for 'object' which is global and all objects are created from it can create problems

let obj1 = new createObj('Obj1');
console.log(obj1);
// Use method we added in createObj prototype
console.log(obj1.displayName());
let obj2 = new createObj('Obj1');