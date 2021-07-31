// Tutorial 25 - Exercise - Creating Editable Div

console.log('This is Tutorial 25');

// Exercise
/*
You have to Create a Div and inject it into a Page which contains a heading.
Whenever someone clicks on the Div it should be converted into an Editable item.
Whenever user clicks away(blur). Save the content into Local Storage.
*/

// Create Div Element
let divElem = document.createElement('div');

// Create a Text Node
let text = document.createTextNode('This is my div....Tap to Edit It.');

// Insert Text Node in div Elem
divElem.appendChild(text);

// Clear Local Storage
localStorage.clear();

// Set Some Attributes to divElem
divElem.setAttribute('id','myDiv');

// Apply Some Inline CSS
divElem.setAttribute('style','border:2px solid black;padding:25px;width:250px');

// Add Div inside Container before heading h1
let container = document.getElementsByClassName('container')[0];
let heading = document.getElementById('heading');
container.insertBefore(divElem,heading);

// console.log(divElem,container,heading);

// Add Event Listener to Div Elem
divElem.addEventListener('click',onClickDivElem);


// Function Definetions
function onClickDivElem(e) {
    // Get Number of textareas
    let txtAreaNo = document.getElementsByClassName('textarea').length;
    if (txtAreaNo == 0) {
        // Add a Text Area
        let html = divElem.innerHTML;  
        divElem.innerHTML = `<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;   
    }else {
        // Do Nothing
    }
    // Listen if user taps outside Text area
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        if (textarea.value.length != 0) {
            divElem.innerHTML = textarea.value;
        } else {
            textarea.value = "This is my div....Tap to Edit It.";
            divElem.innerHTML = textarea.value;
        }
        // Save Data to Local Storage
        saveToLocalStorage('TextArea Data',textarea.value);
    });
}

// Add textarea Data to Local Storage
function saveToLocalStorage(key,value){
    localStorage.setItem(key,value);
}

