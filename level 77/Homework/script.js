//task 2
//we use for...of loops with iterable objects
const arr = ["mari", "GOA", "js"];
for (let i of arr){
    console.log(i);
}

const word = "JaVaScriPt";
for (let x of word) {
    if (x === x.toUpperCase()){
      console.log(x);
    }
}

const arr2 = [1, 2, 3, 4, 5, 6];
for (let y of arr2){
    console.log(y**3);
}

//task 3
//we use for...in loops with objects
const obj1 = {name: "mari", surname: "gogia", age: 15};
for (let i in obj1){
    console.log(`${i} is ${obj1[i]}`);
}

const obj2 = {1: "a", 2: "b", 3:"c"};
for (let x in obj2){
    console.log(obj2[x]);
}

const obj3 = {hello: 5, goodbye: 7, bye: 3};
for (let y in obj3){
    if(obj3[y] > 3){
        console.log(y);
    }
}

//task 4
const greet = name => {
    console.log(`Welcome ${name}!`);
}
greet("Mariami");

const add = (a, b) =>{
    console.log(a + b);
}
add(5, 10);

const multiply = (m, n) =>{
    console.log(m * n);
}
multiply(8, 45);

//task 5
const student = {
    name: "data",
    surname: "jgenti",
    fullName(){
        console.log(`${this.name} ${this.surname}`)
    }
};
student.fullName();

const car = {
    color: "red",
    year: 1999,
    speed: 180,
    grow(){
        this.speed += 5
    }
};
car.grow();
console.log(car.speed);

const year = {
    time: 2025,
    yearGoes(){
        this.time += 1
    }
};
year.yearGoes();
year.yearGoes();
console.log(year.time);

//task 6
const key = 'age';
const person = {
  [key]: 30
};
console.log(person.age);

const num = 7;
const student1 = {
  ["score" + num]: 90
};
console.log(student1.score7);

const obj = {
    [2 + 2]: 'four'
};
console.log(obj[4])

//task 7
const one = { name: 'Bob' };
const two = { name: 'Charlie', age: 28 };
const updatedObj = Object.assign({}, one, two);
console.log(updatedObj);

const person_one = { name: 'Alice' };
const updatedPerson = Object.assign({}, person_one, { age: 25 });
console.log(updatedPerson);

const animal = {color:"green", age: 2, scary: true};
const new1 = Object.assign({}, {name: "snake"}, animal);
console.log(new1);


