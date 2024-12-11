//task 1
const myForm = document.getElementById("form");
        const myBtn = document.getElementById("btn");

        myBtn.addEventListener("click", function(e) {
            e.preventDefault(); 

            const name1 = myForm.elements.name;
            const email = myForm.elements.email;
            const password = myForm.elements.password;
            const gender = myForm.elements.gender;
            const country = myForm.elements.country;
            const checkbox = myForm.elements.checkbox;
            
            let isValid = true;

            if (name1.value === "") {
                name1.style.border = "2px solid red"; 
                isValid = false;
            }

            if (email.value === "") {
                email.style.border = "2px solid red"; 
                isValid = false;
            }

            if (password.value === "") {
                password.style.border = "2px solid red"; 
                isValid = false;
            }
            if (gender.value === "") {
                gender.style.border = "2px solid red"; 
                isValid = false;
            }

            if (country.value === "") {
                country.style.border = "2px solid red"; 
                isValid = false;
            }

            if (!checkbox.checked) {
                checkbox.style.border = "2px solid red"; 
                isValid = false;
            }

            if (isValid) {
                alert("Registration successful!"); 
                console.log(name1.value, email.value, password.value, gender.value, country.value, checkbox.checked);
                myForm.submit(); 
            } else {
                alert("Please fill out all fields and agree to the terms.");
            }
        });
