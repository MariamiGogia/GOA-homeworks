let x = 0;
let y = 0;
const child = document.getElementById("child");

const moveR = setInterval(function(){
    if (x === 149){
        clearInterval(moveR);
        const moveD = setInterval(function(){
            if (y === 149){
                clearInterval(moveD);
                const moveL = setInterval(function(){
                    if (x == 1){
                        clearInterval(moveL);
                        const moveU = setInterval(function(){
                            if (y === 1){
                                clearInterval(moveU);
                            }
                            y--;
                            child.style.top = `${y}px`
                        }, 10)
                    }
                    x--;
                    child.style.left = `${x}px`;
                }, 10)
            }
            y++;
            child.style.top = `${y}px`;
        }, 10)
    }
    x++;
    child.style.left = `${x}px`;
}, 10)

const child2 = document.getElementById("child2")
let m = 0;
let n = 0;

const downM = setInterval(function(){
    if (n === 149){
        clearInterval(downM);
        const rightM = setInterval(function(){
            if (m === 149){
                clearInterval(rightM);
                const upM = setInterval(function(){
                    if (n === 1){
                        clearInterval(upM);
                        const leftM = setInterval(function(){
                            if (m === 1){
                                clearInterval(leftM);
                            }
                            m--;
                            child2.style.left = `${m}px`;
                        }, 10)
                    }
                    n--;
                    child2.style.top = `${n}px`
                }, 10)
            }
            m++;
            child2.style.left = `${m}px`;
        }, 10)
    }
    n++;
    child2.style.top = `${n}px`;
}, 10)