//task 1
const promiseOne = new Promise((resolve, reject) =>{
    resolve("Hello, Promise!");
})
promiseOne.then((resolvedValue) =>{
    console.log(resolvedValue);
})

//task 2
const promiseTwo = new Promise((resolve, reject) =>{
    reject("Something went wrong!");
})
promiseTwo.catch((rejectedValue) =>{
    console.log(rejectedValue);
})

//task 3
const promiseThree = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("2 seconds have passed");
    }, 2000)
})
promiseThree.then((resolvedValue) =>{
    console.log(resolvedValue);
})

//task 4
const promiseFour = new Promise((resolve, reject) => {
    const randomOutcome = Math.random();
    
    if (randomOutcome > 0.5) {
      resolve("Success!");
    } else {
      reject("Failed!");
    }
  });
  
  promiseFour.then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((rejectedValue) => {
      console.log(rejectedValue);
    });

//task 5
const promiseFive = new Promise((resolve) => {
    resolve(5);
  });
  
  promiseFive
    .then((num) => num * 2)
    .then((num) => num * 2)
    .then((num) => num * 2)
    .then((num) => {
      console.log(num);
    });

//task 6
const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
  
  promiseData.then((resolvedValue) => {
    console.log(resolvedValue);
  });