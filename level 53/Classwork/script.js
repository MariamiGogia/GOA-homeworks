//task 1
const myP = document.getElementById("p1");
const myB = document.getElementById("b1");

function colorChange(){
    myP.style.color = "red";
}

myB.onclick = colorChange;
