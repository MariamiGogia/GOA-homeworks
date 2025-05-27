//task 1
const arr1 = ["mari", "gogia", 15];
const [name, lastName, age] = arr1;
console.log(name);
console.log(lastName);

const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;
console.log(first);
console.log(third);

const colors = ['red', 'pink', 'black'];
const [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

const person = { name1: 'mari', age1: 30, city: 'Tbilisi' };
const { name1, age1 } = person;
console.log(name1);
console.log(age1);

const nums = {a: 1, b:2};
const {a: one, b:two} = nums;
console.log(one);

const car = { make: 'BMW', color: 'black', year: 2021 };
const { make:brand, year } = car;
console.log(brand);
console.log(year);

//task 2
function greet(...names) {
    return names.join(', ');
}
console.log(greet('mia', 'nika', 'data'));

function a(...nums){
    return nums.length;
}
console.log(a(1, 2, 50, 20, "hello"));

function strings(...strings) {
    return strings.join(' ');
}
console.log(strings('Hello', 'world!'));

//task 3
const nums1 = [1, 2, 3];
const newNums = [...nums1, 4, 5];
console.log(newNums);

const arr01 = [1, 2];
const arr02 = [3, 4];
const together = (a, b) => [...a, ...b];
console.log(together(arr01, arr02));

let x = [1, 2, 3];
const add = (...args) => {
    return args.reduce((sum, num) => sum + num, 0);
}
console.log(add(...x, 10, 20));

//task 4
//The rest operator is used when you want to collect multiple values into one variable, like *args in python. when we want to use it,
//we should right three dots before the name in argument place.
// The spread operator is used when we want to write lists elements individualy and we use three dots before the name
//of list.


