// Tutorial 18 - More JS Events(Single Click, Double Click, mousedown, mouseenter, mouseleave, mousemove)

console.log('Tut 18');

let btn = document.getElementById('btn');
let divNo = document.querySelector('.no');
let container = document.getElementsByClassName('container')[0];

// Single Click
btn.addEventListener('click',btnTapped);
// Double Click
btn.addEventListener('dblclick',btnDoubleClicked);
// Right click, Left Click ,Wheel/Scroller Click
btn.addEventListener('mousedown',btnMouseDownClicked);
// When user Mouse Cursor is on Element
divNo.addEventListener('mouseenter',divMouseEnter);
// When user Mouse Cursor comes out from Element
divNo.addEventListener('mouseleave',divMouseExit);
// When user moves a mouse in that particular area
container.addEventListener('mousemove',containerMousemove);

function btnTapped(e){
    console.log('Tapped',e);
    // Default behaviour of button is submit inside a form to avoid it use method preventDefault
    e.preventDefault();
}

function btnDoubleClicked(e){
    console.log('Double Tapped',e);
    // Default behaviour of button is submit inside a form to avoid it use method preventDefault
    e.preventDefault();
}

function btnMouseDownClicked(e){
    console.log('Mouse Down Tapped',e);
    // Default behaviour of button is submit inside a form to avoid it use method preventDefault
    e.preventDefault();
}

function divMouseEnter(e){
    console.log('You Entered Div');
    divNo.style.color = 'red';
}

function divMouseExit(e){
    console.log('You Exited Div');
    divNo.style.color = 'black';
}

function containerMousemove(e){
    console.log('Mouse Moved in container');
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},150)`;
}