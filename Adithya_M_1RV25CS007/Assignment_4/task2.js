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
myPromise.then((result) => {
    console.log("Got Result: " + result);
    return result.toUpperCase();
}).then((upperCase) => {
    console.log("Uppercased: " + upperCase);
    return upperCase;
}).then((finalMsg) => {
    console.log("Done: " + finalMsg);
}).
catch((error) => {
    console.log(error);
})