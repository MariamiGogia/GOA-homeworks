//task 1
const arr = [1, 2, 3, 4, 5];
for (let i of arr){
    console.log(i);
}

const arr1 = ["hello", 1, 27, true];
for (let x of arr1){
    console.log(x);
}

const arr2 = [5, 6, 7, 8, 9];
for (let y of arr2){
    console.log(y**2);
}
//we use for...of loop with lists

//task 2
const person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
     console.log(key + ": " + person[key]);
}

const nums = {a: 1, b: 2, c:3}
for (let num in nums){
    console.log(`${num} = ${nums[num]}`)
}

const word = {1: "hello", 2:"bye"};
for (let index in word) {
  console.log("Character at index " + index + ": " + word[index]);
}
//we use for...in loop with objects


//task 3
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Mari"));

const greet1 = name1 => {
    return `Hello, ${name1}!`;
}
console.log(greet1("Mariami"));


//task 4
const add = (a, r, pi=3.14) =>{
    return a*r*pi;
}
console.log(add(5,1));

//task 5
const human = {
    name: "Mariami",
    year: 15,
    grow(){
        this.year +=1
   }
};
console.log(human.year);
human.grow();
console.log(human.year);

//task 6
const propertyName = "age";
const person1 = {
    name: "John",
    [propertyName]: 27
};
console.log(person1.age);

//task 7
const class_a = {
    name: "lala",
    age: 18,
    class: 12
};
const class_b = {
    name: "Sani",
    age: 19,
    car: true
};
const new1 = Object.assign({}, class_a, class_b);
console.log(new1);

