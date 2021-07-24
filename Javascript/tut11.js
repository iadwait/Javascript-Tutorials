// Tutorial 11 - DOM,Window object,Alert,Prompt,confirm,Location,etc...

// Function to print msg in console
const log = function(msg){
    console.log(msg);
}

// Window Object - is Global object in JS
let a = window;
// console.log(a);
//window is Global object can be excluded while using it's methods 
//Document is a Part of Window Object
// window.alert('Good morning');
// alert('Good morning');

// Prompt
// a = prompt('Enter Your name');
// console.log(a);

// Confirm - Returns True  or False
// a = confirm("Are you sure you want to submit the Request");
// console.log(a);

// Windows Height and Width
let h = window.innerHeight; //Also there is outer width and outer height
let w = innerWidth;
log('Height = '+ h);
log('Width = '+ w);

// ScrollX and ScrollY - How much points user have scrolled in X and Y Direction
log('scroll x '+ scrollX );
log('scroll y '+ scrollY );

// location
let l = location;
log(l);
// location.href = "https://www.codewithharry.com";
// location.reload();
log(location.toString());
// log(history); history.go(-1) - Takes you to previous page //history.length show history details
