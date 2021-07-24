// Tutorial 15 - Children,Parent & Traversing the DOM
console.log('Tutorial 15');

// ChildNodes vs Children
let cont = document.querySelector('.container'); // .container or div.container same
console.log(cont);
console.log(cont.childNodes); //childNodes includes all text comments newlines etc
console.log(cont.children); //children only contains Elements

// NodeName and Nodetype
/* 
Node Types
1 - Eleement
2 - Attribute
3 - text Node
8 - Comment
9 - Document
10 - docType

*/
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName); // H1
console.log(nodeType); // 1

// Accessing Child of children
let container = document.querySelector('.container');
// console.log(container.children);
// Div Container -> Div 4 Child -> UL -> Li[1] ->Color
console.log(container.children[4].children[0].children[1].style.color = 'red');

// Accessing First or Last Child from ChildNode
console.log(container.firstChild); //#Text
console.log(container.lastChild); //#Text
// Accessing First or last Child from Children
console.log(container.firstElementChild); // h1 Insane Programming
console.log(container.lastElementChild); // h1 Footer

// Children Element Count
console.log(container.childElementCount);
// console.log(container.children);

// Get Next Element from current element or next Sibling
//Siblings means next Element not inside the Element/Children
// nextElementSibling - Gives next Element(Children)
console.log(container.firstElementChild.nextElementSibling); //After h1 -> div (child red) 
// nextSibling - Gives Next (ChildNode)
console.log(container.firstElementChild.nextSibling); // #text

// We can access any nested Element or node
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

// Parent Node
console.log(container.firstElementChild.parentNode);