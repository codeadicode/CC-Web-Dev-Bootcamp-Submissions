const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if(success) {
            resolve("Operation Successful!");
        }
        else {
            reject("Operation Failed!");
        }
    }, 2000);
})
myPromise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
})