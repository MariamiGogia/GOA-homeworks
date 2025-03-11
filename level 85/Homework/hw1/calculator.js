//task 1
function calculator(a, b, operation){
    switch (operation){
        case 'substract':
            return a - b;
        case 'add':
            return a + b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b != 0){
                return a / b;
            }else{
                return "Can't be divided by Zero!";
            }
    }
}

//task 2
function filter(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {  
            newArray.push(array[i]);
        }
    }
    
    return newArray;
}

module.exports = {calculator, filter};