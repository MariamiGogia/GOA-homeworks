//task 1
const form = document.getElementById("form");
let i = 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const age = form.elements.age.value;

  const person = {
    name: name,
    email: email,
    age: age
  };

  localStorage.setItem(`person${i}`, JSON.stringify(person));
  i += 1;

  form.reset();
});

//task 2
const form1 = document.getElementById("form1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form1.elements.name1.value;
  const email = form1.elements.email1.value;
  const age = form1.elements.age1.value;

  const user = {
    name: name,
    email: email,
    age: age
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  form1.reset();
});