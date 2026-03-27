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

async function runAll() {
    try {
        const promise1 = await p1;
        console.log(promise1);
        const promise2 = await p2;
        console.log(promise2);
        const promise3 = await p3;
        console.log(promise3);
        console.log("All Done");
    }
    catch (error) {
        console.log(error.message);
    }
}

runAll();