// task 3
let age = confirm("Are you an Adult?");

if (age){
    console.log("You are Adult");
}else{
    console.log("You are kid");
}

//confirm("Are you an adult?") shows a dialog box with "OK" and "Cancel" buttons. If the user clicks "OK", it returns true, and if they click "Cancel", it returns false.
//We store the returned value in the age variable.
//Then, using an if statement, we check the value of age. If it's true, we print "You are Adult", otherwise we print "You are kid".
//The confirm() function is used to show a dialog box with two options: "OK" and "Cancel." When you use it, it asks the user to confirm or cancel an action.
//This helps to prevent accidental actions by confirming the user's choice.