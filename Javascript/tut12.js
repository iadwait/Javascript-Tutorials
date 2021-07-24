// Tutorial 12 - Understanding DOM and creating Website layout
console.log('Tut 12');

// DOM - Document Object model - Structural Representation of our HTML Document, it is just an Object
let a = document;
console.log(a);
console.log(typeof a);// Object
// console.log(document.all); //Show list of Dom contents
// console.log(document.forms);
let form1 = document.forms[0];
console.log(form1);

let all = document.all;
// Creates Array from an HTML Collection
Array.from(all).forEach(function(element){
    console.log(element);
})

// get all links from a page
let links = document.links;
let link1 = links[0].href;
console.log(link1);

// document.script and document.images
console.log(document.scripts);
console.log(document.images);
