const p1 = new Promise((resolve) => {
    resolve("User Loaded"); 
});
const p2 = new Promise((reject) => {
    reject("Server Error");
});
const p3 = new Promise((resolve) => {
    resolve("Products Loaded"); 
});

Promise.allSettled([p1, p2, p3]).then((result) => {
    for(let i = 0; i < result.length; i++) {
        if(result[i].status === "fulfilled") {
            console.log("Fulfilled: " + result[i].value);
        }
        else {
            console.log("Rejected: " + result[i].value);
        }
    }
});