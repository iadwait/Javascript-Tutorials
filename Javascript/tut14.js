// Tutorial 14 - HTML Element Selectors
console.log('Tut 14');

/*
Element Selectors:-
1. Single Element Selector
2. Multi Element Selector
*/

// 1. Single Element Selector
let div1 = document.getElementById('div1'); //get Element with Id div1
let className = div1.className; //Give Class names associated with that particular Element
let childNode = div1.childNodes; //Things that contains inside that element
let parentNode = div1.parentNode; //Returns Parent Element
// console.log(div1);
// console.log(className);
// console.log(childNode);
console.log(parentNode);
// Change CSS from JS
//Change text Color
div1.style.color = 'red';
// Change text
div1.innerText = 'This text is changed from Javascript using innerText property'
// Using innerHTML we can apply HTML tags 
div1.innerHTML = '<b>This text is changed from Javascript using innerHTML property</b>'
console.log(div1.innerText); //This text is changed from Javascript using innerHTML property
console.log(div1.innerHTML); //<b>This text is changed from Javascript using innerHTML property</b>

// Query Selector
// target id
let sel = document.querySelector('#div3');
console.log(sel);
// target class
sel = document.querySelector('.child');
console.log(sel);
// target tag
sel = document.querySelector('a');
sel.style.color = 'gray';
console.log(sel);

// 2. Multi Element Selector
// Eg- get Classes with name 'container' than access it's child
let elemsContainer = document.getElementsByClassName('container');
console.log(elemsContainer);
let child4 = elemsContainer[0].getElementsByClassName('child')[3];
// console.log(child4);
// Class
sel = document.getElementsByClassName('child');
// console.log(sel);
// console.log(sel[2].style.color = 'red');
// target all
sel = document.querySelectorAll('a');
// console.log(sel);
// console.log(sel[2].href);
sel = document.querySelectorAll('h1');
Array.from(sel).forEach(function(element){
    element.style.color = 'green'
})
// Tag
sel = document.querySelectorAll('div');
console.log(sel);
sel = document.getElementsByTagName('div');
console.log(sel);
Array.from(sel).forEach(function(element){
    console.log(element);
    // element.style.color = 'green';
})
