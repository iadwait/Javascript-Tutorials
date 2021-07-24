// Tutorial 16 - Creating,Removing & Replacing Elements in JS
console.log('This is Tut 16');

// Creating an Element
let element = document.createElement('li');

// Text Node
// TODO:- Need to debug why textNode not showing up
let text1 = document.createTextNode('I am a Text node');
element.appendChild(text1);

// Add Class,Id,set Attributes to the Element
element.className = 'childUL';
element.id = 'liId';
element.setAttribute('title', 'My Title');
element.innerText = 'This li is created from JS'
element.innerHTML = '<b>This li is created from JS</b>'

console.log(element);

// Appending Element to DOM
let ul = document.querySelector('.myUL');
ul.appendChild(element);
console.log(ul);

// Replacing an Element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
// elem2.innerHTML = 'This is Text node created for Elem 2'
let tNode = document.createTextNode('This is Text node created for Elem 2');
elem2.appendChild(tNode);
console.log(elem2);
element.replaceWith(elem2);

// Replacing Child Node
let elem3 = document.createElement('li');
elem3.innerHTML = 'asdasdasd';
let myul = document.getElementById('myul');
// Syntax to replace - (newElement/Replacewith,OldElement)
myul.replaceChild(elem3, document.getElementById('this'));

// Remove Child
myul.removeChild(document.getElementById('a'));

// know the id,class name of an Element or whether it has that attribute ot not
let elem2Id = elem2.getAttribute('id');
let elem2ClassName = elem2.getAttribute('class');
let hasClass = elem2.hasAttribute('class');
// Remove Attribute
// elem2.removeAttribute('id');
console.log(hasClass,elem2ClassName);

// Exercise - Create an Element , set it href
let aTag = document.createElement('a');
aTag.setAttribute('href','https://codewithharry.com');
let h4Ele = document.createElement('h4');
h4Ele.innerHTML = 'Go to Code With Harry Website';
aTag.appendChild(h4Ele);
document.body.appendChild(aTag);
