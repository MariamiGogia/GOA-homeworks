//task 2
function sumOfNumbers(a, b){
    return a + b;

}

console.log(sumOfNumbers(10, 27));

//task 3
function concatenation(str1, str2){
    return str1 + str2;
}

console.log(concatenation("Java", "script"));

//task 4
const myImg = document.getElementById("sl");
const myBtn = document.getElementById("btn");

function changeSizeOfImg(){
    myImg.style.width = "200px";
    myImg.style.height = "100px";
}
myBtn.onclick = changeSizeOfImg;

//task 5
const myImg2 = document.getElementById("img2");
const myBtn2 = document.getElementById("btn2");

function changeSrc(){
    myImg2.src = "photo_number_2.webp";
}

myBtn2.onclick = changeSrc;
