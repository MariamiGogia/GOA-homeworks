//task 3

//1
const age = 20;
const canDrink = age >= 21 ? 'Yes' : 'No';
console.log(canDrink);

const isSunny = true;
const weather = isSunny ? 'Go outside!' : 'Stay indoors!';
console.log(weather);

const number = 4;
const result = number % 2 === 0 ? 'Even' : 'Odd';
console.log(result);

//2
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const words = ['hi', 'hello', 'hey'];
console.log(words.map(word => word + '!'));

const names = ['alice', 'bob'];
console.log(names.map(name => name.toUpperCase()));

const numbers1 = [5, 12, 8, 20];
const bigNumbers = numbers1.filter(num => num > 10);
console.log(bigNumbers);

const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(num => num % 2 === 0);
console.log(evens); 

const name = ['Alice', 'Bob', 'Anna'];
const aNames = name.filter(name => name.startsWith('A'));

//3
const username = null;
const display = username ?? 'Guest';
console.log(display);

let age1;
const userAge = age1 ?? 'Not';
console.log(userAge);

const score = 0;
const finalScore = score ?? 100;
console.log(finalScore);

//4
function delay() {
  return new Promise(resolve => setTimeout(() => resolve('Done!'), 1000));
}

async function run() {
  const result = await delay();
  console.log(result);
}
run();

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user.name);
}
getUser();

async function fetchData() {
    try {
      const res = await fetch('https://bad.url');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
fetchData();




