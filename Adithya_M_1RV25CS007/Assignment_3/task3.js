function checkAge(age) {
    if(age <= 0) {
        throw new Error("Age must be a positive number!");
    }
    else if(age < 18) {
        throw new Error("Too Young! Must be 18 or above.");
    }
    else {
        console.log("Access granted!");
    }
}

try{
    checkAge(21);
}
catch (error) {
    console.log("Error: " + error.message);
}