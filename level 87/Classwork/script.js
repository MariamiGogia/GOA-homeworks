//task 1
//a promise is a thing that presents result of an asynchronous operation.
//It has 3 states: pending, rejected and fulfilled.

//task 2
const serverNew = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
});
serverNew
    .then((res) => {
    console.log(res);
});

//task 3
const serverNew2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Hello");
    }, 1000);
});

serverNew2
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });

//task 4
const serverItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        const item = true;
        if (item) {
            resolve("Received successfully!");
        } else {
            reject("Not left");
        }
    }, 1000);
});

serverItem
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })

