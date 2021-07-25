// Tutorial 17 - Events & Event Object

console.log('Events');

// Click Event
document.getElementById('heading').addEventListener('click',function(e){
    console.log('Insane Programmer tapped');
    let data;
    // e is the Even Object that function provides us the Details about the Even Occurred as a Callback
    console.log(e);
    // location.href = 'https://www.google.com';
    data = e.target;
    console.log(data);
    console.log(data.className);
    console.log(data.classList);
    console.log(data.id);

    // Create Array from Class List
    console.log(Array.from(e.target.classList));

    // X & Y location of that element clicked, w.r.t Element
    console.log(e.offsetX);
    console.log(e.offsetY);
    // ClientX and clientY, w.r.t complete Browser
    console.log(e.clientX);
    console.log(e.clientY);
});

// mouseover Even - When mouse hover's event is triggered
document.getElementById('heading').addEventListener('mouseover',function(e){
    console.log('Mouse is on Heading');
    // let ele = document.getElementById('heading');
    // ele.style.color = 'red';
    console.log(e);
});