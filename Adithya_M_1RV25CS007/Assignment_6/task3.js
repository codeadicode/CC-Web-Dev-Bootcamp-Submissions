async function safeDivide(a, b) {
    const myPromise = new Promise((resolve, reject) => {
        if(b === 0) {
            reject("Cannot divide by zero");
        }
        else {
            resolve(a/b);
        }    
    });
    
    try {
        const result = await myPromise;
        console.log(result);
    }
    catch(error) {
        // console.log("Error: " + error.message);
        console.log("Error: " + error);
    }
}

safeDivide(10, 2);
safeDivide(10, 0);