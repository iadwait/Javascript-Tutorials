// Tutorial 27 - Object Literals,Constructors and Object Oriented Javascript

console.log('This is tut 27');

// Object Literals for Creating objects
let car = {
    carName: 'Nexa Baleno',
    topSpeed: 250,
    run: function () {
        console.log(this.carName + " is running at " + this.topSpeed + " Speed");
    }
}


// Creating a Constructor for Car object
function generateCar(givenName, givenSpeed) {
    this.cName = givenName;
    this.cSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.cName} is running`);
    }
    this.compareSpeedWithAudi = function () {
        console.log(`This is slower than Audi with speed difference ${this.cSpeed - 80}`);
    }
}

let objCar1 = new generateCar('Duster', 180);
console.log(objCar1);

let objCar2 = new generateCar('Maruti Alto', 100);
console.log(objCar2);