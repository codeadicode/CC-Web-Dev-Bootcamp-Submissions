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
async function runOperation() {
    try{
        const output = await myPromise;
        console.log("Result: " + output);
    }
    catch (error) {
        console.log(error.message);
    }
}
runOperation();