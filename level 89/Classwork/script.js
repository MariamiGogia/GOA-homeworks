//task 1
const task_1 = document.getElementById("task_1");

fetch("https://fakestoreapi.com/products/2")
    .then((response) => {
        return response.json();

    })
    .then((res) =>{
        task_1.innerHTML = `
        <p>title: ${res.title}</p>
        <p>price: ${res.price}</p>
        <p>description: ${res.description}</p>
        <img src="${res.image}" width=150/>
        `
    });

//task 2
const task_2 = document.getElementById("task_2");

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        for (let i = 0; i <= 20; i++) {
            const item = res[i];
            task_2.innerHTML += `
                <p>title: ${item.title}</p>
                <p>price: $${item.price}</p>
                <p>description: ${item.description}</p>
                <img src="${item.image}" width="150" />
            `
        }
    });