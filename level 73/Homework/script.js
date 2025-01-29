//task 3
const parent = document.getElementById("parent");
const parent1 = document.getElementById("parent1");
const child = document.getElementById("child");
const child1 = document.getElementById("child1");

child.addEventListener("click", (event) => {
    console.log("bubbling"); // bubbling 
});
child.addEventListener("click", (event) => {
    console.log("capturing"); // capturing
}, true);

//task 4
const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let i = 0;
listm = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg"
];

next.addEventListener('click', (event)=>{
    i++;
    if(i == listm.length){
        i = 0;
    }
    img.src = listm[i]
});

prev.addEventListener("click", (event)=>{
    i--;
    if(i == -1){
        i = 4;
    }
    img.src = listm[i]
});


//task 5
const img1 = document.getElementById("img1");
const prev1 = document.getElementById("prev-1");
const next1 = document.getElementById("next-1");
let x = 0;
listn = [
    "./images/6.webp",
    "./images/7.webp",
    "./images/8.webp",
    "./images/9.avif",
    "./images/10.webp",
    "./images/11.jpg"
];

next1.addEventListener("click", (event)=>{
    x++;
    if(x == listn.length){
        x = 0;
    }
    img1.src = listn[x]
});

prev1.addEventListener("click", (event)=>{
    x--;
    if(x == -1){
        x = 5;
    }
    img1.src = listn[x]
});