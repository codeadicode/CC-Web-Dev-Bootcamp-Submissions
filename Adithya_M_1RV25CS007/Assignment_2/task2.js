var count = 0;
const newFunction = setInterval(() => {
    count++;
    console.log("Tick...");

    if(count == 5) {
        clearInterval(newFunction);
        console.log("Stopped!");
    }

}, 1000);



