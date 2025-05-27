//task 3
const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let i = 0;
const listm = [
    "./img1.webp",
    "./img2.webp",
    "./img3.jpg",
    "./img4.jpeg"
]

next.addEventListener("click", () =>{
    i++;
    if(i == listm.length){
        i = 0;
    }
    img.src = listm[i];
});

prev.addEventListener("click", () =>{
    i--;
    if(i == -1){
        i = 3;
    }
    img.src = listm[i];
});