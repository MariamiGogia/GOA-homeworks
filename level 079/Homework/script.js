//task 2
let a = 10;
let b = true;
[b,a] = [a, b]
console.log(a, b)

//task 3
function average(...nums){
    let count = 0;
    for(i of nums){
        count += i;
    }
    return count / nums.length;
}

console.log(average(1, 2, 3, 4, 5));

const isThere = (lst, ...elements) =>{
    for (i of elements){
        if (lst.indexOf(i) === -1){
            return false;
        }
    }
    return true;
}
let arr = [1, 0, 10, 30];
console.log(isThere(arr, 1, 2, 0));

const addNumbersOnly = (...ints) =>{
    let count = 0;
    for(i of ints){
        count +=i;
    }
    return count;
}
console.log(addNumbersOnly(1000, 300, 20, 7));

//task 4
const addString = (name, surname, job)=>{
    return `I'm ${name} ${surname} and I want to become a ${job}`;
}
let person = ["Mariami", "Gogia"];
console.log(addString(...person, "programmist"));

const addFiveNums=(a,b,c,d,e) =>{
    return a + b + c + d + e; 
}
let arr1 = [17, 0, -1];
console.log(addFiveNums(...arr1, 27, 15));

let arr2 = ["Mariami", "Lika", "Data", "Salome"];
let klass = ["Nika", "Nodo", ...arr2];
console.log(klass);
console.log(`${klass[4]} is smartest person in the class!!!`);
