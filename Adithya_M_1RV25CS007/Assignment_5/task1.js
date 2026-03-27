const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User Loaded"); 
    }, 1000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders Loaded"); 
    }, 2000);
});
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products Loaded"); 
    }, 3000);
});

Promise.all([p1, p2, p3]).then((result) => {
    console.log(result[0] + " \n" + result[1] + " \n" + result[2] + " \n");
})

