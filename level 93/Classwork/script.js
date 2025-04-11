//task 1
const div = document.getElementById("div");
const fetchData = async() =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products/2");
        const res = await response.json();
        div.innerHTML += `
            <p>title: ${res.title}</p>
            <p>price: $${res.price}</p>
            <p>description: ${res.description}</p>
            <img src="${res.image}" width="150" />
        `
    } catch(error){
        console.error(error);
    }
}
fetchData();

//task 2
const myDiv = document.getElementById("div1");
const fetchD = async() =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        for (let i = 0; i <= 20; i++) {
            const item = res[i];
            myDiv.innerHTML += `
                <p>title: ${item.title}</p>
                <p>price: $${item.price}</p>
                <p>description: ${item.description}</p>
                <img src="${item.image}" width="150" />
            `
        }
    } catch(error){
        console.error(error);
    }
}

fetchD();

//task 3
//1
const add = (a, b) => a + b;
const greet = (name) => `Hello, ${name}!`;
const squareRoot = x => x ** 0.5;
console.log(add(1,2));
console.log(greet("Mariami"));
console.log(squareRoot(625));

//2
const name = "Nika";
console.log(`Hello, my name is ${name}`);
const product = "Lipgloss";
const price = 65;
console.log(`The price of the ${product} is $${price}.`);
const input = 5;
console.log(`The result of the calculation is ${input * 2}.`);

//3
let name1 = "Mariami"
const dic1 = {
    name1
}

let title = "Frankenstein";
let bPrice = "$20";
let pages = 350;
const book = {
    title,
    bPrice,
    pages
}

let surname = "Gogia";
const person = {
    name: "Barbare",
    surname,
    age: "20"
}

console.log(dic1, book, person);

//4
const greet1 = (name = "Guest") => `Hello, ${name}!`;
const sum = (a = 0, b = 0) => a + b;
const multiply = (x = 1, y = 1) => x * y;
console.log(greet1(), sum(7), multiply());

//5
const greet2 = (greeting, ...names) => `${greeting}, ${names.join(', ')}`;
const sum1 = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
const logDetails = (name, age, ...hobbies) => console.log(name, age, hobbies);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const person1 = { name: "John", age: 25 };
const updatedPerson = { ...person1, city: "New York" };


