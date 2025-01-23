//task 2
const child = document.getElementById("child-container");

let x = 0;
let y = 0;
let direction = "bottom";

const moveLeft = setInterval(function(){
    if(direction == "bottom"){
        y++;
        if(y == 300){
            direction = "right";
        }
    } else if(direction == "right"){
        x++;
        if(x == 300){
            direction = "top";
        }
    } else if(direction == "top"){
        y--;
        if(y == 0){
            direction = "left";
        }
    } else{
        x--;
        if(y == 0 && x == 0){
            clearInterval(moveLeft);
        }
    }

    child.style.left = x + 'px';
    child.style.top = y + 'px';
}, 10);


//task 3
const myBox = document.getElementById("box");
n = 0;
m = 0;
movement = 15;

document.addEventListener("keydown", event =>{
    if (event.key.startsWith("Arrow")){
        event.preventDefault()

        switch(event.key){
            case "ArrowRight":
                n += movement;
                break;
            case "ArrowLeft":
                n -= movement;
                break;
            case "ArrowDown":
                m += movement;
                break;
            case "ArrowUp":
                m -= movement;
                break;
        }
        myBox.style.top = `${m}px`;
        myBox.style.left = `${n}px`;
    }

});