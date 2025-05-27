//test 1
let a = 20;
while (a < 30){
    console.log(`You are young lady ${a}!`);
    a ++;
}
//test 2
let answer = prompt("Enter your name only!");
if (answer.length === "" || answer.length < 8){
    console.log("Your name is short");
}else if (answer.length === 8){
    console.log("Your name is fine");
}else{
    console.log("Your name is long")
}

//test 3
for (i= 1; i < 10; i = i + 3){
    console.log(i)
}

//test 4
let arr = [1, 2, 3, 4, "hello", "world", "java"]
for (i of arr){
    console.log(i)
}

//test 5
let word = "Goal-oriented academy"
for (i of word){
    console.log(i)
}

//test 6
for (i = 27; i > -1; i = i - 3){
    console.log(i)
}
