//task 1
const fruits = ["Apple", "Banana", "Melon"];
fruits[1] = "Strawberry"

//task 2
const vegetables = new Array("carrot", "tomato", "potato");

//task 3
const language = new Array(2);
language[0] = "python";
language[1] = "Js";
console.log(language);

//task 4
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);

//task 5
console.log(fruits.slice(0,1));
console.log(vegetables.slice(1,3));
console.log(language.slice(1,2));

//task 6
function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

console.log(getRandomNumber(10));

//task 7
let count = 0;
const interval = setInterval(function(){
    count +=1;
    console.log(count);
    if(count >= 30){
        clearInterval(interval)
    };
}, 1000)

//task 8
const date = new Date();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());


