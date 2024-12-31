//task 2
const arr1 = new Array("py","thon", "HTML", "blueprint", "<", "java", "script");
console.log(arr1.slice(0,2));
console.log(arr1.slice(5,7));
console.log(arr1.slice(2,5));

//task 3
const date = new Date();
console.log(`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${date.getSeconds()}`);

//task 4
function generatePassword(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for(let i=0; i < 8; i++){
        const index = Math.floor(Math.random() * letters.length);
        password += letters[index];
    }
    console.log(password);
}

generatePassword()
