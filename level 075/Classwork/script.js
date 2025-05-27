//task 1
const form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const name = form.elements.name;
    const email = form.elements.email;
    const pass = form.elements.password;

    console.log(name.value);
    console.log(email.value);
    console.log(pass.value);    
})

//task 4
let name1 = "Sani"
let age = 15
let country = "Georgia"

console.log(`${name1} is student`)
console.log(`This boy is ${age}years old`)
console.log(`School called IB mthiebi is located in ${country}`)


//task 5
const age_1 = 17;
const isAdult = age_1 >= 18 ? "Yes" : "No";
console.log(isAdult);

const score = 98;
const grade = score >= 80 ? "A" : "B";
console.log(grade);

const color = "red";
const movement = color == "green" ? "go!" : "stop!"
console.log(movement)

//task 6
const bool = true;
bool && console.log("true"); 

const bool2 = true;
bool2 && console.log("You are right!");

const bool3 = true;
bool3 && console.log("He is adult");
