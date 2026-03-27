var count = 5;

const newFunction = setInterval(() => {
    console.log(count);
    count--;

    if(count == 0) {
        clearInterval(newFunction);
        console.log("Time's up!");
    }
}, 1000);


