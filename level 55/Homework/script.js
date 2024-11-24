// task 2
let num1 = Number(prompt("Enter number 1:"));
let num2 = Number(prompt("Enter number 2:"));
console.log(num1 + num2);

//task 3
const myBtn = document.getElementById("btn");
const form = document.getElementById("form");

myBtn.addEventListener("click", function(e){
    e.preventDefault()
    console.log(form.elements.text.value);
    console.log(form.elements.email.value);
    console.log(form.elements.psword.value);
});


//task 4
// Best practices are: writing comments, indentation, Camel case, semicolons at the end of the code.

//task 5
// It is better to access the form elements using the name attribute, because now we only have to import one element 
//into the JavaScript file, whereas if we imported them using IDs, we would have to assign an ID to each element and 
//import them using these IDs, which is an unnecessary hassle when you are dealing with many elements.