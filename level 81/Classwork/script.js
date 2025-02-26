//task 1
class Car{
    constructor(brand, year, color, size){
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.size = size;
    }

    carInfo(){
        return `Car is ${this.brand} and ${this.size}`;
    }

    carSound(){
        return "This car says broom broom!!!";
    }
}
const car1 = new Car('Toyota', 2015, 'Red', 'SUV');
const car2 = new Car('Honda', 2020, 'Blue', 'Sedan');
const car3 = new Car('Ford', 2018, 'Black', 'Truck');

console.log(car1.carInfo());
console.log(car1.carSound());
console.log(car2.carInfo());
console.log(car2.carSound());
console.log(car3.carInfo());
console.log(car3.carSound());

//task 2
class Person{
    constructor(name, id){
        this._name = name;
        this._id = id;
    }

    get name(){
        return this._name;
    }

    get personId(){
        return `${this._name}'s id is ${this._id}`;
    }
}

const person1 = new Person("Mariami", "#1242622");

console.log(person1.name);
console.log(person1.personId);
