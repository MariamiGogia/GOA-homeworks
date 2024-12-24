//task 1
const student1 = {
    name: "Mari",
    lastname: "Gogia",
    age: 15
};

const student2 = {
    name: "Nia",
    lastname: "Tchania",
    age: 14
};

const student3 = {
    name: "Data",
    lastname: "Jgenti",
    age: 14
};

console.log(student1.name);

//task 2
function Car(brand, color, year){
    this.brand = brand;
    this.color = color;
    this.year = year;
}

let car1 = new Car("BMW", "black", 1999);
let car2 = new Car("Porsche", "red", 2024);
let car3 = new Car("Toyota", "blue", 2020);
console.log(car3.brand);

//task 3
function Person(name, lastname, age, id){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
}

let person1 = new Person("maria", "gogia", 15, "#1268389");
let person2 = new Person("natali", "datadze", 17, "#1652737");
let person3 = new Person("gia", "dagelashvili", 24, "#1653737");
console.log(person1.id);

//task 4
function Animal(type, color, size){
    this.type = type;
    this.color = color;
    this.size = size;
}

let animal1 = new Animal("panthera", "black", "medium");
let animal2 = new Animal("rabbit", "white", "small");
let animal3 = new Animal("dog", "gold", "big");
console.log(animal1.type);
console.log(animal2.color);
console.log(animal3.size);

//task 5
//It is used to create and initialize objects with specific properties and sometimes methods, it makes easier to create lot's of objects
//with different information.
