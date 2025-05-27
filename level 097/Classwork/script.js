const myForm = document.getElementById("form");
const list = document.getElementById("list");
const input = document.getElementById("input");

let task = JSON.parse(localStorage.getItem("task")) || [];
task.forEach(haveTask);

myForm.addEventListener("submit", function(e){
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "") return;

    haveTask(inputValue);
    task.push(inputValue);
    localStorage.setItem("task", JSON.stringify(task));
    input.value = "";  
});

function haveTask(txt){
    const div = document.createElement("div");
    div.textContent = txt;

    const btn = document.createElement("button");
    btn.textContent = "delete";

    btn.addEventListener("click", function(){
        list.removeChild(div);
        task = task.filter(t => t !== txt);
        localStorage.setItem("task", JSON.stringify(task));
    });

    div.appendChild(btn);
    list.appendChild(div);
}

