//task 1
const form = document.getElementById("form");
const myBtn = document.getElementById("btn");

myBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(form.elements.surname.value);
});