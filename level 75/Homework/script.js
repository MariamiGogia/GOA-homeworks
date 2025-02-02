//task 2
const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = form.elements.name;
    const last_name = form.elements.lastname;
    const email = form.elements.email;
    const password = form.elements.password;

    console.log(name.value);
    console.log(last_name.value);
    console.log(email.value);
    console.log(password.value);
})

//task 3
const type = "robot";
const isHuman = type == "human" ? "Yes" : "No";
console.log(isHuman);

const edu = 'university';
const studying = edu == "school" ? "Student is studying at School" : "Student is studying at university";
console.log(studying);

const color = "red"
const rainbow = color == "white" || color == "black" ? "not in rainbow" : "in rainbow";
console.log(rainbow);

//task 4
const bool = false;
bool && console.log("true"); 

const bool2 = true;
bool2 && console.log("");

const bool3 = true;
bool3 && console.log("He is adult");


//task 6
var number = 10;
const word = "GOA";
let statement = true;
console.log(`${number}, ${word}, ${statement}`);
