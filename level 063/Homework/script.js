//task 3
//this refers to the new object being created, It allows you to set properties and methods for that object.

//task 4
function Computer(brand, size, color){
    this.brand = brand;
    this.size = size;
    this.color = color;
    this.buy = function(){
        console.log(`You bought ${this.brand}'s computer!`)
    };
}

const computer1 = new Computer("Apple", "medium", "silver");
const computer2 = new Computer("Samsung", "big", "black");
computer1.buy()

function Keyboard(brand, color, light){
    this.brand = brand;
    this.color = color;
    this.light = light;
}

const keyboard1 = new Keyboard("Razer Huntsman V3 Pro TKL", "black", true);
const keyboard2 = new Keyboard("Apple", "silver", false);
console.log(keyboard1.light)

function Bus(brand, model, color, numPeople){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.numPeople = numPeople;
    this.drive = function(){
        console.log(`You are sitting in the ${this.brand}`)
    };
}

const bus1 = new Bus("Škoda", "single-decker", "black", 120);
const bus2 = new Bus("Ford", "minibus", "silver", 25);
bus1.drive()
