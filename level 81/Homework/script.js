//task 1
class Car{
    constructor(make, color, year) {
      this.make = make;
      this.color = color;
      this.year = year;
    }
  
    displayInfo(){
      console.log(`${this.year} ${this.make} ${this.color}`);
    }
  }
const myCar = new Car("BMW", "black", 2020);
myCar.displayInfo();

class Person{
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet(){
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
const person1 = new Person("Alice", 30);
person1.greet();

class Rectangle{
    constructor(width, height){
      this.width = width;
      this.height = height;
    }
  
    area(){
      return this.width * this.height;
    }
  }
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area());

//task 2
class Animal{
    constructor(name){
      this.name = name;
    }
}
  
class Dog extends Animal{
    speak() {
      console.log(`${this.name} barks.`);
    }
}
  
class Cat extends Animal{
    speak() {
      console.log(`${this.name} meows.`);
    }
}
  
class Bird extends Animal{
    constructor(name, color, flies){
        super(name);
        this.color = color
        this.flies = flies
    }
    speak() {
      console.log(`${this.name} chirps.`);
    }
}
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety", "blue", true);
dog.speak();
cat.speak();
bird.speak();

//task 3
//Inheritance allows a child class to inherit properties and methods from a parent class, so the child class 
// can reuse the parent’s functionality.
//The super() function is used in a child class to call the constructor of the parent class, it lets the child class 
//use or modify the parent class's behavior. for example in class Bird

//tasl 4
//classes are a blueprint for creating objects. They define the structure and behavior that the objects will have
//we use them to organize and reuse code, so we don’t have to repeat ourselves
//instead of creating each object from scratch, we can create many objects from the same class blueprint, 
// each with its own data but the same structure.
  