//task 1 in classwork / task 2 in homework
const myForm = document.getElementById("myform");

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(myForm.elements.name.value);
    console.log(myForm.elements.email.value);
    console.log(myForm.elements.pass.value);
    console.log(myForm.elements.gender.value);
    console.log(myForm.elements.checkbox.checked);
    myForm.reset();
    alert("Registration successful!");
})

//The form collects the user's name, email, password, gender, and agreement to terms.
//When submitted, the form values are logged to the console, the form is reset, and a success message appears.
//.checked is specifically used to see if a checkbox is checked (true) or not (false)







